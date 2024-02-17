const mongoose = require('mongoose');
const express = require('express');
const productRoute = require("./routes/product");
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get('/', function (req, res) {
    res.send('Hello Node API')
})

mongoose.connect('mongodb+srv://hakancakmak5241:5OJ22JLGcTQ279mp@backenddb.msmj4aa.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });