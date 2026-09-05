import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { Route } from "../../src/routes/api/resume.ts";

const getResume = Route.options.server.handlers.GET;
const originalFetch = globalThis.fetch;

try {
  const pdf = readFileSync(new URL("../../public/resume.pdf", import.meta.url));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");

  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
    throw new Error("The hosted resume route must not fetch upstream");
  };

  const response = await getResume();
  assert(response instanceof Response);
  assert.equal(response.status, 302);
  assert.equal(response.headers.get("Location"), "/resume.pdf");
  assert.equal(response.headers.get("Cache-Control"), "no-cache");
  assert.equal(fetchCalled, false);
} finally {
  globalThis.fetch = originalFetch;
}
console.log("Resume redirect and hosted PDF checks pass.");
