const {addItem, listOrder, removeItem} = require("../utils/order")
const yargs = require("yargs")

const command = process.argv[2]

if (command == "add") {
    console.log("adding item to order...")
    addItem(yargs.argv.order)
} else if (command == "remove"){
    console.log("removing item from order...")
    removeItem(yargs.argv.order)
} else if (command == "list"){
    listOrder()
} else {
    console.log("command not recognised")
}