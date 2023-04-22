const express = require('express');
const config = require('./config');
const employeeRoutes = require('./routes');
const app = express();

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // "*" means allow requests from any domain
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/v1", employeeRoutes);

app.listen(config.SERVER_PORT, ()=>{
    console.log("Server is running on ", config.SERVER_PORT);
})