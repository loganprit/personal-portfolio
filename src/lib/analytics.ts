import type { PostHog } from "posthog-js";

let client: Promise<PostHog | null> | undefined;

export function initializeAnalytics(): Promise<PostHog | null> {
  const token = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;
  if (!import.meta.env.PROD || import.meta.env.SSR || !token || !host) {
    return Promise.resolve(null);
  }

  client ??= import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(token, {
        api_host: host,
        defaults: "2025-05-24",
        cookieless_mode: "always",
        person_profiles: "never",
        capture_pageview: true,
        autocapture: false,
        capture_exceptions: false,
        capture_performance: false,
        capture_heatmaps: false,
        capture_dead_clicks: false,
        rageclick: false,
        disable_session_recording: true,
        disable_surveys: true,
        disable_product_tours: true,
        disable_web_experiments: true,
        disable_external_dependency_loading: true,
        advanced_disable_flags: true,
      });
      return posthog;
    })
    // A blocked analytics download must not interfere with the portfolio.
    .catch(() => null);
  return client;
}

export function captureEvent(
  event:
    | "resume_requested"
    | "email_contact_requested"
    | "social_link_opened"
    | "experience_view_changed",
  properties: Record<string, string>,
) {
  void initializeAnalytics().then((posthog) =>
    posthog?.capture(event, properties),
  );
}
