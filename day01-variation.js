export function getVegetarianNames(items){
    const item = items.filter((item) => (item.vegetarian && item.available))
    return item.map((item) => item.name)
}

export function getItemsUnderPrice(items, maxPrice){
    if(!maxPrice){
        return items.map((item) => item.name)
    } else {
        const item = items.filter((item) => (item.price <= maxPrice))
        return item.map((item) => item)
    }
}

export function getCategoryNames(items){
    const itemsCategory =  items.map((item) => item.category)
    const noDuplicate = [...new Set(itemsCategory)]
    return noDuplicate;
}

export function findCheapestInCategory(items, category){
    const item = items.filter((item) => (item.category === category))
    // let cheapest = null;
    const sortedItems = (item.sort((a,b) => a.price - b.price))
    return sortedItems[0];
    // if(item.length === 0){
    //     return undefined;
    // } else {
    //     for (const current of item) {
    //         if(cheapest == null || current.price < cheapest.price)
    //             cheapest = current;
    //         }
    //     return cheapest
    // }
}