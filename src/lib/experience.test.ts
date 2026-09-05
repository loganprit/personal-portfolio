import assert from "node:assert/strict";
import { parseExperienceSearch } from "./experience.ts";

assert.deepEqual(parseExperienceSearch({}), { experience: "work" });
assert.deepEqual(parseExperienceSearch({ experience: "education" }), {
  experience: "education",
});
assert.deepEqual(parseExperienceSearch({ experience: "invalid" }), {
  experience: "work",
});
