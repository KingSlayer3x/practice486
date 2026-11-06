import { formatPrice } from './menuhub/src/utils.js';
export function getItemNames(items){
    return items.map((item) => item.name);
}

// I receive list of items as an array of objects
// I return the items names as a list
// I will use the map method
// if the array is empty I will return a message that indecates that

export function getItemsByCategory(items, category) {
    return items.filter((item) => item.category === category);
}

export function findItemById(items, id){
    return items.find((item) => item.id === id);
}

export function getAvailableItems(items){
    return items.filter((item) => item.available);
}
export function toSummary(item){
    return {"id": item.id, "name": item.name, "priceLabel": formatPrice(item.price)}
}
export function summaries(item){
    return `${item.name} - ${formatPrice(item.price)}`
}
export function getMenuBoardLines(items){
    const availableItems = getAvailableItems(items)
    return availableItems.map((item) => summaries(item))
    
}