import assert from "node:assert/strict";
import { parseExperienceSearch, parseMotionSearch } from "./experience.ts";

assert.deepEqual(parseExperienceSearch({}), { experience: "work" });
assert.deepEqual(parseExperienceSearch({ experience: "education" }), {
  experience: "education",
});
assert.deepEqual(parseExperienceSearch({ experience: "invalid" }), {
  experience: "work",
});
assert.deepEqual(parseMotionSearch({}), {
  motionSection: "hero",
  motionHero: "off",
  motionExperience: "off",
  motionStory: "off",
  motionSkills: "off",
  motionContact: "off",
});
assert.deepEqual(
  parseMotionSearch({ motionSection: "story", motionStory: "stagger" }),
  {
    motionSection: "story",
    motionHero: "off",
    motionExperience: "off",
    motionStory: "stagger",
    motionSkills: "off",
    motionContact: "off",
  },
);
