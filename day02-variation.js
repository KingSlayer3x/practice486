export function getCategoryTotals(items){
    return items.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.price
        // console.log(acc)
        return acc;
    },{})
}

export function getPriceRange(items){
    if(items.length === 0) return undefined;
    return items.reduce((acc, item) => {
        acc.min = Math.min(acc.min, item.price);
        acc.max = Math.max(acc.max, item.price);
        return acc;
    },{min: Infinity, max: -Infinity})
}