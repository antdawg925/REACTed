// import controller to use model
const StockController = require("../controllers/StockController")
console.log(StockController);

module.exports = (app) => {
    app.get("/api/getAll", StockController.findAllStocks);
    app.post("/api/post", StockController.createNewStock);
    app.get("/api/getOne/:id", StockController.findOneStock);
    app.delete("/api/delete/:id", StockController.deleteStock);
    app.put("/api/update/:Id", StockController.updateExistingStock);
}