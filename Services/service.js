const router = require("express").Router();
// const db = require("../DB/db")
const quizDB = require("../entities/user")
const mongoose = require("mongoose");

router.get("/allData", (req, res) => {
    quizDB.quizD.find({})
        .then((a) => {
            res.json(a);
        })
        .catch((error) => {
            // Handle any errors that occurred during the query
            res.status(500).json({ error: "Internal Server Error" });
        });
});

router.get("/", (req, res) => {

    const data = new quizDB.quizD({
        title: "raja",
        author: "harry",
        description: "yup"
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

router.delete("/delete/:id", (req, res) => {

    const id = req.params.id
    quizDB.quizD.deleteOne({ _id: id })
        .then(() => res.json("Book deleted successfully"))
        .catch((err) => res.status(400).json("Error: " + err));


})




router.route('/update/:id').post(async (req, res) => {
    console.log(req.params.id);
  await  quizDB.quizD.findById(req.params.id)
      .then((a) => {
        a.author = req.body.author;
        a.title = req.body.title;
        a.description = req.body.description;


        console.log(a)
  
        a
          .save()
          .then(() => res.json('Activity updated!'))
          .catch((err) => res.status(400).json('Error: ' + err));
      })
      .catch((err) => res.status(400).json('Error: ' + err));
  });


router.post("/save", (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description

    const detail = new quizDB.quizD({
        author,
        title,
        description
    })

    detail.save()
        .then((result) => {
            console.log(result);
            // res.send("Data inserted successfully");
            res.json(detail)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error inserting data");
        });



})

module.exports = router;