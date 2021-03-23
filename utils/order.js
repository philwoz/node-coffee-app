const fs = require("fs")

const loadOrders = () => {
    try {
        const dataBuffer = fs.readFileSync("src/orders.json")
        const orderJson = dataBuffer.toString()
        return JSON.parse(orderJson)
    } catch (error) {
        return []
    }
}

const saveOrders = allOrders => {
    const orderJson =   JSON.stringify(allOrders)
    fs.writeFileSync("src/orders.json", orderJson)
}

const addItem = (item) => {
    const allOrders = loadOrders()
    allOrders.push({order: item})

    saveOrders(allOrders)
}

const listOrder = () => {
    const allOrders = loadOrders()

    allOrders.map(item => {
        console.log(item)
    })
}

const removeItem = itemToDelete => {
    const allOrders = loadOrders()

    const itemToKeep = allOrders.filter( item => {
        return item.order != itemToDelete
    })

    saveOrders(itemToKeep)
}

module.exports = {
    addItem,
    listOrder,
    removeItem,
}