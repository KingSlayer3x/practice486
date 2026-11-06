// Shared menu data used by almost every exercise in this workbook.
// Prices are multiples of 0.25 so that simple sums stay exact in JavaScript.
export const menuItems = [
{ id: 1, name: "Bruschetta", category: "Starters", price: 6.5, vegetarian: true, spicy: false, available: true, rating: 4.4 },
{ id: 2, name: "Chicken Wings", category: "Starters", price: 8.75, vegetarian: false, spicy: true, available: true, rating: 4.1 },
{ id: 3, name: "Tomato Soup", category: "Starters", price: 5.5, vegetarian: true, spicy: false, available: true, rating: 4.0 },
{ id: 4, name: "Margherita Pizza", category: "Pizza", price: 11, vegetarian: true, spicy: false, available: true, rating: 4.7 },
{ id: 5, name: "Pepperoni Pizza", category: "Pizza", price: 13.25, vegetarian: false, spicy: true, available: true, rating: 4.6 },
{ id: 6, name: "Veggie Supreme Pizza", category: "Pizza", price: 12.5, vegetarian: true, spicy: false, available: false, rating: 4.2 },
{ id: 7, name: "Grilled Salmon", category: "Mains", price: 18.5, vegetarian: false, spicy: false, available: true, rating: 4.8 },
{ id: 8, name: "Beef Burger", category: "Mains", price: 14, vegetarian: false, spicy: false, available: true, rating: 4.5 },
{ id: 9, name: "Mushroom Risotto", category: "Mains", price: 13.75, vegetarian: true, spicy: false, available: true, rating: 4.3 },
{ id: 10, name: "Spicy Chicken Curry", category: "Mains", price: 15, vegetarian: false, spicy: true, available: true, rating: 4.2 },
{ id: 11, name: "Chocolate Lava Cake", category: "Desserts", price: 7.25, vegetarian: true, spicy:false, available: true, rating: 4.9 },
{ id: 12, name: "Tiramisu", category: "Desserts", price: 6.75, vegetarian: true, spicy: false, available: false, rating: 4.6 },
{ id: 13, name: "Lemonade", category: "Drinks", price: 3.5, vegetarian: true, spicy: false, available: true, rating: 4.0 },
{ id: 14, name: "Espresso", category: "Drinks", price: 2.75, vegetarian: true, spicy: false, available: true, rating: 4.3 },
{ id: 15, name: "Iced Tea", category: "Drinks", price: 3.25, vegetarian: true, spicy: false, available: true, rating: 3.9 },
];
export const categories = ["Starters", "Pizza", "Mains", "Desserts", "Drinks"];