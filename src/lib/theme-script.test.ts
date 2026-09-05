import assert from "node:assert/strict";
import vm from "node:vm";
import { themeScript } from "./theme-script.ts";

function runBootScript({
  stored,
  dark,
  storageError = false,
}: {
  stored: string | null;
  dark: boolean;
  storageError?: boolean;
}) {
  const classes = new Set<string>();
  const attributes = new Set(["data-darkreader-mode"]);
  const properties = new Map<string, string>();
  const style = {
    colorScheme: "",
    setProperty(name: string, value: string) {
      properties.set(name, value);
    },
  };
  const root = {
    classList: {
      add(...names: string[]) {
        names.forEach((name) => classes.add(name));
      },
      remove(...names: string[]) {
        names.forEach((name) => classes.delete(name));
      },
    },
    getAttributeNames: () => [...attributes],
    removeAttribute: (name: string) => attributes.delete(name),
    style,
  };

  vm.runInNewContext(themeScript, {
    document: { documentElement: root },
    localStorage: {
      getItem: () => {
        if (storageError) throw new Error("storage unavailable");
        return stored;
      },
    },
    navigator: { platform: "Linux", maxTouchPoints: 0 },
    window: {
      innerHeight: 800,
      matchMedia: () => ({ matches: dark }),
      addEventListener: () => {},
    },
  });

  return { classes, attributes, properties, colorScheme: style.colorScheme };
}

let result = runBootScript({ stored: "sepia", dark: true });
assert(result.classes.has("dark"));
assert(!result.classes.has("sepia"));

result = runBootScript({ stored: "light", dark: true });
assert(result.classes.has("light"));
assert.equal(result.colorScheme, "light");
assert(!result.attributes.has("data-darkreader-mode"));

result = runBootScript({ stored: "system", dark: true });
assert(result.classes.has("dark"));

result = runBootScript({ stored: null, dark: false });
assert(result.classes.has("light"));

result = runBootScript({ stored: "dark", dark: false, storageError: true });
assert(result.classes.has("light"));
assert.equal(result.properties.get("--vh"), "8px");
assert.equal(result.properties.get("--real-vh"), "8px");
