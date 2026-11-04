import assert from "node:assert/strict";
import test from "node:test";
import "../robots.js";

const { robots } = globalThis.robotRollCall;

test("the shared data script exports a non-empty robot list", () => {
  assert.ok(Array.isArray(robots));
  assert.ok(robots.length > 0);
  for (const robot of robots) {
    assert.equal(typeof robot.name, "string");
    assert.ok(robot.name.trim());
    assert.equal(typeof robot.job, "string");
    assert.ok(robot.job.trim());
    assert.equal(typeof robot.greeting, "string");
    assert.ok(robot.greeting.trim());
    assert.ok(["mint", "peach", "lilac", "yellow"].includes(robot.color));
  }
  assert.equal(new Set(robots.map(robot => robot.name)).size, robots.length);
});
