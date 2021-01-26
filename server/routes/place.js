const { Router } = require("express");
const place = require("../models/placesSchema");

const router = Router();

router.post("/", async(req, res) => {
    try {
        var created = await place.create(req.body);
        res.send(created);
    } catch (err) {
        res.send(err);
    }
});
router.post("/", async(req, res) => {
    try {
        if (req.body.name) {
            var places = await place.find({
                name: { $regex: req.body.name, $options: "i" },
            });
        } else {
            var places = await place.find({
                category: { $regex: req.body.category, $options: "i" },
            });
        }
        res.send(places);
    } catch (err) {
        res.send(err);
    }
});

//-------- get all places ---------

router.get("/", async(req, res) => {
    try {
        var places = await place.find({});
        res.send(places);
    } catch (err) {
        res.send(err);
    }
});

//------ get one place -------

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneplace = await place.findById(id);
        if (!oneplace) throw new Error("No place to display Err !");
        res.status(200).json(oneplace);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//------------ export module ---------------
module.exports = router;