import { config } from "dotenv";

import express from "express";
import db from "./config/db.js" 
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000)

// middleware
app.use(express.json());

// routes
app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("404_R - no encontrado papi");
})


//Start server
app.listen(app.get("port"), () => {
    console.log("server is running on port", app.get("port"));
});


// Connect to database
db.connect().then(() => {
    console.log("Connected to database. Yeii!!");
}).catch((err) => {
    console.log("Error: ", err)
})