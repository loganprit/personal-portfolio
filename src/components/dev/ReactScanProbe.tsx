"use client";

import { useEffect, useRef } from "react";

type NamedComponent = {
  displayName?: string;
  name?: string;
  render?: unknown;
  type?: unknown;
};

type ReactScanFiber = {
  elementType?: unknown;
  type?: unknown;
};

type ReactScanRender = {
  count?: number;
  time?: number;
};

type ReactScanOnRender =
  | ((fiber: ReactScanFiber, renders: ReactScanRender[]) => void)
  | null;

type ReactScanInternals = {
  options?: {
    value: {
      onRender?: ReactScanOnRender;
    };
  };
};

type ReactScanGlobal = {
  ReactScanInternals?: ReactScanInternals;
};

type ComponentSnapshot = {
  name: string;
  renders: number;
  time: number;
};

type ReactScanSnapshot = {
  status: "waiting" | "recording" | "unavailable";
  totalRenders: number;
  lastUpdated: number | null;
  components: ComponentSnapshot[];
};

declare global {
  interface Window {
    __REACT_SCAN__?: ReactScanGlobal;
    __PORTFOLIO_REACT_SCAN__?: ReactScanSnapshot;
  }
}

const initialSnapshot: ReactScanSnapshot = {
  status: "waiting",
  totalRenders: 0,
  lastUpdated: null,
  components: [],
};
const MAX_ATTACH_ATTEMPTS = 40;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getComponentName(type: unknown): string | null {
  if (typeof type === "string") {
    return type;
  }

  if (typeof type === "function") {
    const named = type as NamedComponent;
    return named.displayName || named.name || null;
  }

  if (!isRecord(type)) {
    return null;
  }

  const named = type as NamedComponent;
  if (named.displayName || named.name) {
    return named.displayName || named.name || null;
  }

  return getComponentName(named.render) || getComponentName(named.type);
}

function getFiberName(fiber: ReactScanFiber): string {
  return (
    getComponentName(fiber.elementType) ||
    getComponentName(fiber.type) ||
    "Unknown"
  );
}

function renderCount(renders: ReactScanRender[]): number {
  return renders.reduce((total, render) => total + (render.count ?? 1), 0);
}

function renderTime(renders: ReactScanRender[]): number {
  return renders.reduce((total, render) => total + (render.time ?? 0), 0);
}

export function ReactScanProbe() {
  const outputRef = useRef<HTMLOutputElement>(null);

  useEffect(() => {
    const components = new Map<string, ComponentSnapshot>();
    let totalRenders = 0;
    let publishFrame = 0;
    let previousOnRender: ReactScanOnRender | undefined;
    let attached = false;
    let attachAttempts = 0;

    const publish = () => {
      publishFrame = 0;
      const nextSnapshot: ReactScanSnapshot = {
        status: "recording",
        totalRenders,
        lastUpdated: Date.now(),
        components: Array.from(components.values())
          .sort((a, b) => b.renders - a.renders || b.time - a.time)
          .slice(0, 20),
      };

      window.__PORTFOLIO_REACT_SCAN__ = nextSnapshot;
      if (outputRef.current) {
        outputRef.current.textContent = JSON.stringify(nextSnapshot);
      }
    };

    const schedulePublish = () => {
      if (!publishFrame) {
        publishFrame = window.requestAnimationFrame(publish);
      }
    };

    const writeSnapshot = (snapshot: ReactScanSnapshot) => {
      window.__PORTFOLIO_REACT_SCAN__ = snapshot;
      if (outputRef.current) {
        outputRef.current.textContent = JSON.stringify(snapshot);
      }
    };

    const attach = () => {
      const internals = window.__REACT_SCAN__?.ReactScanInternals;
      if (!internals) {
        return false;
      }

      if (!internals.options?.value) {
        return false;
      }

      if (attached) {
        return true;
      }

      previousOnRender = internals.options.value.onRender;
      attached = true;
      internals.options.value.onRender = (fiber, renders) => {
        previousOnRender?.(fiber, renders);

        const name = getFiberName(fiber);
        const existing = components.get(name) ?? {
          name,
          renders: 0,
          time: 0,
        };

        const nextCount = renderCount(renders);
        existing.renders += nextCount;
        existing.time += renderTime(renders);
        totalRenders += nextCount;
        components.set(name, existing);
        schedulePublish();
      };

      const recordingSnapshot: ReactScanSnapshot = {
        ...initialSnapshot,
        status: "recording",
      };
      writeSnapshot(recordingSnapshot);
      return true;
    };

    attach();

    const interval = window.setInterval(() => {
      attachAttempts += 1;

      if (attach()) {
        window.clearInterval(interval);
        return;
      }

      if (attachAttempts >= MAX_ATTACH_ATTEMPTS) {
        window.clearInterval(interval);
        writeSnapshot({
          ...initialSnapshot,
          status: "unavailable",
          lastUpdated: Date.now(),
        });
      }
    }, 250);

    return () => {
      window.clearInterval(interval);
      if (publishFrame) {
        window.cancelAnimationFrame(publishFrame);
      }
      const internals = window.__REACT_SCAN__?.ReactScanInternals;
      if (attached && internals?.options?.value) {
        internals.options.value.onRender = previousOnRender ?? null;
      }
    };
  }, []);

  return (
    <output
      ref={outputRef}
      aria-hidden="true"
      data-testid="react-scan-report"
      style={{
        border: 0,
        clipPath: "inset(50%)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "pre",
        width: 1,
      }}
    >
      {JSON.stringify(initialSnapshot)}
    </output>
  );
}
