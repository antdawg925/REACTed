// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - attributes the entries in the db must follow
const StockSchema = new mongoose.Schema({
    ticker: {
        type: String,
        required: [true, " must have a {PATH}! "],
        minlength: [2, " {PATH} You gave '{VALUE}' for an input, you need at least 2  "]
    },
    bought: {
        type: Number,
        required: [true, " must have an image "],
        minlength: [0, " {PATH} You gave '{VALUE}' for an input, you need at least 3  "]
    },
    sold: {
        type: Number,
        required: [true, " must have a {PATH}! "],
        min: [0, "Cannot have negative stock prices"]
    },
    size:{
        type:Number,
        min:[0, "Cant have negative position size"]
    },
    volume:{
        type:Number,
        min:[0, "Cant have negative position size"]
    },
    market:{
        type:String
    },
    sector:{
        type:String
    },
    float:{
        type:Number,
        min:[0, "Float has to be entered"]
    },
    date: {
        type: Date,
    },
}, { timestamps: true })

// the model - makes the queries to the DB
const Stock = mongoose.model('Stock', StockSchema);

// export the model
module.exports = Stock;

