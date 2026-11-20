import { menuItems } from "./menuData.js";
import { check, summary, checkTrue } from "./check.js";
import {
hasSpicyItem, allHavePrice, isCategoryFullyAvailable, getTotalPrice,
 getAveragePrice, countByCategory, findMostExpensive
} from "./day02.js";
console.log("Day 2 checks");
const notSpicy = menuItems.filter((i) => !i.spicy);
check("hasSpicyItem: full menu", hasSpicyItem(menuItems), true);
check("hasSpicyItem: no spicy items", hasSpicyItem(notSpicy), false);
check("hasSpicyItem: empty array", hasSpicyItem([]), false);
const withFreeItem = [...menuItems, { ...menuItems[0], id: 99, price: 0 }];
check("allHavePrice: full menu", allHavePrice(menuItems), true);
check("allHavePrice: one item costs 0", allHavePrice(withFreeItem), false);
check("allHavePrice: empty array", allHavePrice([]), true);
check("isCategoryFullyAvailable: Drinks", isCategoryFullyAvailable(menuItems, "Drinks"), true);
check("isCategoryFullyAvailable: Desserts (Tiramisu is sold out)", isCategoryFullyAvailable(menuItems, "Desserts"), false);
check("isCategoryFullyAvailable: unknown category", isCategoryFullyAvailable(menuItems, "Sushi"), false);
check("getTotalPrice: full menu", getTotalPrice(menuItems), 142.25);
check("getTotalPrice: Drinks only", getTotalPrice(menuItems.filter((i) => i.category === "Drinks")),
9.5);
check("getTotalPrice: empty array", getTotalPrice([]), 0);
check("getAveragePrice: full menu", getAveragePrice(menuItems), 9.48);
check("getAveragePrice: available items only", getAveragePrice(menuItems.filter((i) => i.available))
, 9.46);
check("getAveragePrice: empty array", getAveragePrice([]), 0);
check("countByCategory: full menu", countByCategory(menuItems), {
Starters: 3, Pizza: 3, Mains: 4, Desserts: 2, Drinks: 3,
});
check("countByCategory: empty array", countByCategory([]), {});
check("findMostExpensive: full menu", findMostExpensive(menuItems)?.name, "Grilled Salmon");
check("findMostExpensive: drinks only", findMostExpensive(menuItems.filter((i) => i.category === "Drinks"))?.name, "Lemonade");
check("findMostExpensive: empty array", findMostExpensive([]), undefined);
check("menu still has 15 items", menuItems.length, 15);
checkTrue("first item untouched", menuItems[0].price === 6.5 && menuItems[0].name === "Bruschetta");
summary()