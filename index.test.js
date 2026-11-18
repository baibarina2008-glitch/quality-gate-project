
const test = require("node:test");
const assert = require("node:assert");
const greeting = require("./index.js");

test("Greeting should return correct message", () => {
  assert.strictEqual(greeting("Azamat"), "Hello, Azamat!");
});
