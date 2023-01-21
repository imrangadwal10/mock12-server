const express = require("express");
const connect=require("./config/connect")
const cors = require("cors");
const userRoute = require("./user/user.route")
const calculateRoute = require("./calculate/calculate.route")
const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json())

 app.use('/user', userRoute)
 app.use('/calculate', calculateRoute)

app.get("/", (req, res) => {
    res.status(200).send("Working Fine")
})

app.listen(PORT, async () => {
     await connect()
    console.log(`server started on port ${PORT}`)
})