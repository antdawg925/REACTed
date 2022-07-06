const express = require('express')
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB_NAME = "stock_db"

// ------------- MIDDLEWARE -------------
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors());

// ------------- ROUTES -------------
const routesFunction =  require("./routes/stockRoutes")
routesFunction(app);

// ------------- MONGO -------------
const exportedDBFunction = require("./config/mongoose.config")
exportedDBFunction(DB_NAME);

// ------------- START SERVER -------------
app.listen(PORT, () => console.log(`PORT ${PORT} IS LOCKED AND LOADED`))
