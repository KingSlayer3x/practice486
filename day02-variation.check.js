import { menuItems } from "./menuData.js";
import { check, summary } from "./check.js";
import {
getCategoryTotals, getPriceRange, groupNamesByCategory, hasCheapSpicyItem,
} from "./day02-variation.js";
console.log("Day 2 variation checks");
check("category totals", getCategoryTotals(menuItems), {
Starters: 20.75, Pizza: 36.75, Mains: 61.25, Desserts: 14, Drinks: 9.5,
});
check("category totals: empty", getCategoryTotals([]), {});
check("price range", getPriceRange(menuItems), { min: 2.75, max: 18.5 });
check("price range: one item", getPriceRange([menuItems[0]]), { min: 6.5, max: 6.5 });
check("price range: empty", getPriceRange([]), undefined);
check("names by category: Drinks", groupNamesByCategory(menuItems)?.Drinks, ["Lemonade", "Espresso",
"Iced Tea"]);
check("names by category: keys", Object.keys(groupNamesByCategory(menuItems) ?? {}), [
"Starters", "Pizza", "Mains", "Desserts", "Drinks",
]);
check("cheap spicy: up to 9", hasCheapSpicyItem(menuItems, 9), true);
check("cheap spicy: up to 8", hasCheapSpicyItem(menuItems, 8), false);
check("cheap spicy: empty", hasCheapSpicyItem([], 100), false);
summary();