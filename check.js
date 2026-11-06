// check.js — a tiny test helper for the plain-JavaScript days (Days 1-5).
// You do NOT need to edit this file. Put it next to your day files.
import { isDeepStrictEqual } from "node:util";
let failures = 0;
let passes = 0;
// check("name", actualValue, expectedValue)
export function check(name, actual, expected) {
if (isDeepStrictEqual(actual, expected)) {
passes++;
console.log(" ✓ " + name);
} else {
failures++;
process.exitCode = 1;
console.log(" ✗ " + name);
console.log(" expected:", JSON.stringify(expected));
console.log(" received:", JSON.stringify(actual));
}
}
// checkTrue("name", someBooleanExpression)
export function checkTrue(name, condition) {
check(name, Boolean(condition), true);
}
// section("title", () => { ...checks... })
// Runs a group of checks. If your code crashes (for example because a function is still
// an empty TODO), you get a readable message instead of a red wall of text.
export function section(title, run) {
console.log(title);
try {
run();
} catch (error) {
failures++;
process.exitCode = 1;
console.log(" ✗ the checks crashed: " + error.message);
console.log(" Hint: is a function still an empty TODO, or does it return undefined?");
}
}
// Freeze an object/array and everything inside it, so accidental mutation throws an error.
export function deepFreeze(value) {
if (value && typeof value === "object" && !Object.isFrozen(value)) {
Object.freeze(value);
Object.values(value).forEach(deepFreeze);
}
return value;
}
// Prints a summary line. Call it once, at the very end of your file.
export function summary() {
console.log(failures === 0 ? `\nAll ${passes} checks passed.` : `\n${failures} failed, ${passes} p
assed.`);
}
