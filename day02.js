export function hasSpicyItem(items){
    return items.some((item) => item.spicy)
}

export function allHavePrice(items){
    return items.every((item) => item.price > 0)
}

export function isCategoryFullyAvailable(items, category){
    const element = items.filter((item) => item.category === category)
    // if(element.length === 0) {
    //     return false
    // } else {
    //     return element.every((item) => item.available)
    // }
    return element.length > 0 && element.every((item) => item.available)
}

export function getTotalPrice(items){
    // console.log(items.reduce((sum, item) => sum + item.price, 0))
    return items.reduce((sum, item) => sum + item.price, 0)
}

export function getAveragePrice(items){
    if(items.length === 0) return 0
    const avg = (getTotalPrice(items)/items.length);
    console.log(avg)
    return Math.round(avg * 100) / 100
}