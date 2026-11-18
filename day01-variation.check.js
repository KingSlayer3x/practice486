import { menuItems } from "./menuData.js";
import { check, summary } from "./check.js";
import {
getVegetarianNames, getItemsUnderPrice, getCategoryNames, findCheapestInCategory
} from "./day01-variation.js";
console.log("Day 1 variation checks");
check("vegetarian + available names", getVegetarianNames(menuItems), [
"Bruschetta", "Tomato Soup", "Margherita Pizza", "Mushroom Risotto",
"Chocolate Lava Cake", "Lemonade", "Espresso", "Iced Tea",
]);
check("under $6", getItemsUnderPrice(menuItems, 6)?.map((i) => i.name), ["Tomato Soup", "Lemonade",
"Espresso", "Iced Tea"]);
check("no maxPrice -> everything", getItemsUnderPrice(menuItems)?.length, 15);
check("no maxPrice -> a copy, not the same array", getItemsUnderPrice(menuItems) !== menuItems, true
);
check("unique categories", getCategoryNames(menuItems), ["Starters", "Pizza", "Mains", "Desserts", "Drinks"]);
check("cheapest dessert", findCheapestInCategory(menuItems, "Desserts")?.name, "Tiramisu");
check("cheapest in unknown category", findCheapestInCategory(menuItems, "Sushi"), undefined);
summary();