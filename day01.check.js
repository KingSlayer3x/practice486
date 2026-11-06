import { menuItems } from "./menuData.js";
import { check, checkTrue, summary } from "./check.js";
import { getItemNames, getItemsByCategory,findItemById, getAvailableItems, toSummary, getMenuBoardLines, summaries } from "./day01.js";
// Read these checks: they are also examples of how to call your code.
console.log("Day 1 checks");
const names = getItemNames(menuItems);
check("getItemNames: count", names?.length, 15);
check("getItemNames: first and last", [names?.[0], names?.[14]], ["Bruschetta", "Iced Tea"]);
check("getItemsByCategory: Desserts", getItemsByCategory(menuItems, "Desserts")?.map((i) => i.id), [11, 12]);
check("getItemsByCategory: Drinks", getItemsByCategory(menuItems, "Drinks")?.map((i) => i.id), [13,
14, 15]);
check("getItemsByCategory: unknown category", getItemsByCategory(menuItems, "Sushi"), []);

check("findItemById: id 7", findItemById(menuItems, 7)?.name, "Grilled Salmon");
check("findItemById: missing id", findItemById(menuItems, 99), undefined);

check("getAvailableItems: count", getAvailableItems(menuItems)?.length, 13);
checkTrue("getAvailableItems: Tiramisu is not included", !getAvailableItems(menuItems)?.some((i) => i.name === "Tiramisu"));

check("toSummary", toSummary(menuItems[3]), { id: 4, name: "Margherita Pizza", priceLabel: "$11.00"
});
checkTrue("toSummary returns a new object", toSummary(menuItems[3]) !== menuItems[3]);
const lines = getMenuBoardLines(menuItems);
check("getMenuBoardLines: count", lines?.length, 13);
check("getMenuBoardLines: first line", lines?.[0], "Bruschetta - $6.50");
check("getMenuBoardLines: whole numbers keep two decimals", lines?.[3], "Margherita Pizza - $11.00")
;
checkTrue("getMenuBoardLines: sold-out items are hidden", !lines?.some((l) => l.startsWith("Tiramisu")));
check("original array still has 15 items", menuItems.length, 15);
check("original first item untouched", menuItems[0], {
id: 1, name: "Bruschetta", category: "Starters", price: 6.5,
vegetarian: true, spicy: false, available: true, rating: 4.4,
});
const emptyarr = getMenuBoardLines([]);
check("Empty array with no errors",[], emptyarr);
summary();