const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://root:VRPd3ICLK6juCQCa@cluster0.dg4ocjz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const quizDB = new mongoose.Schema({
    name: String,
    sid: Number
})

const quizD = mongoose.model("quizDB", quizDB);

app.get("/", (req, res) => {

    const data = new quizD({
        name: "rajat kadian",
        sid: 300351928
    })

    data.save()
        .then((result) => {
            console.log(result);
            // res.send("Data inserted successfully");
            res.json(data)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error inserting data");
        });



})

app.get("/allData", (req, res) => {
    quizD.find({})
        .then((a) => {
            res.json(a);
        })
        .catch((error) => {
            // Handle any errors that occurred during the query
            res.status(500).json({ error: "Internal Server Error" });
        });
});


  


app.listen(7000, (req, res) => {
    console.log('listening')
})



