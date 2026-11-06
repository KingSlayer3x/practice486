// Small helpers shared by the React exercises.
// You wrote your own versions of these in Days 1-5. Use yours if you prefer.
// Round to 2 decimal places (money). 1.005 style errors are avoided by working in cents.
export function round2(value) {
return Math.round((value + Number.EPSILON) * 100) / 100;
}
// 12.5 -> "$12.50"
export function formatPrice(value) {
return "$" + round2(value).toFixed(2);
}