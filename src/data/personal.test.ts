import { describe, expect, it } from "bun:test";
import { personal } from "./personal";

type PackageJson = {
  packageManager?: string;
  scripts?: Record<string, string>;
};

const loadPackageJson = async () =>
  (await Bun.file("package.json").json()) as PackageJson;

describe("personal data guardrails", () => {
  it("keeps resume links routed through the API endpoint", () => {
    expect(personal.resumeUrl).toBe("/api/resume");
  });

  it("keeps the contact email usable for mail links", () => {
    expect(personal.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

describe("project hygiene guardrails", () => {
  it("pins Bun as the package manager", async () => {
    const packageJson = await loadPackageJson();

    expect(packageJson.packageManager).toBe("bun@1.2.0");
  });

  it("keeps the test script lightweight", async () => {
    const packageJson = await loadPackageJson();

    expect(packageJson.scripts?.test).toBe("bun test");
  });
});
