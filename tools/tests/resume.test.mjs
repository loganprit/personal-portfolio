import assert from "node:assert/strict";
import { Route } from "../../src/routes/api/resume.ts";

const getResume = Route.options.server.handlers.GET;
const originalFetch = globalThis.fetch;
const originalError = console.error;

try {
  for (const contentType of ["application/pdf", "application/octet-stream"]) {
    globalThis.fetch = Object.assign(async (_input, init) => {
      assert(init?.signal instanceof AbortSignal);
      return new Response("%PDF-1.7", {
        headers: { "Content-Type": contentType },
      });
    }, originalFetch);
    const response = await getResume();
    assert(response instanceof Response);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Content-Type"), "application/pdf");
    assert.equal(response.headers.get("X-Content-Type-Options"), "nosniff");
    assert.equal(response.headers.get("Accept-Ranges"), null);
    assert.match(response.headers.get("Cache-Control") ?? "", /public/);
    assert.equal(await response.text(), "%PDF-1.7");
  }
  for (const upstream of [
    new Response("<script>alert(1)</script>", {
      headers: { "Content-Type": "text/html" },
    }),
    new Response("Unavailable", { status: 503 }),
    new Response(null, { status: 204 }),
  ]) {
    globalThis.fetch = Object.assign(async () => upstream, originalFetch);
    const response = await getResume();
    assert(response instanceof Response);
    assert.equal(response.status, 502);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    assert(!String(await response.text()).includes("<script>"));
  }
  globalThis.fetch = Object.assign(async () => {
    throw new DOMException("Timed out", "TimeoutError");
  }, originalFetch);
  console.error = () => {};
  const response = await getResume();
  assert(response instanceof Response);
  assert.equal(response.status, 502);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
} finally {
  globalThis.fetch = originalFetch;
  console.error = originalError;
}
console.log(
  "Resume PDF handling, upstream failures, and timeout handling pass.",
);
