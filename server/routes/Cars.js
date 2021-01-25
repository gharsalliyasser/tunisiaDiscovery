const { Router } = require('express');
const car = require('../database/Cars');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const router = Router();

router.post('/',upload.single("image_url"), async(req, res) => {
    const { title,  text, price } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);

    let cars = {};
    cars.title = title;
    cars.imageUrl = result.secure_url;;
    cars.text = text;
    cars.price = price;
    let carModel = new car(cars);
    await carModel.save();
    res.json(carModel);
})

//------------ get all cars ----------------

router.get('/', async(req, res) => {
    try {
        const cars = await car.find();
        if (!cars) throw new Error('No cars to display Err !');
        const sorted = cars.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


//------------ get one car ----------------

router.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const oneCar = await car.findById(id);
        if (!oneCar) throw new Error('No Cars to display Err !');
        res.status(200).json(oneCar);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//------------ create an car ------------------

router.post('/', async(req, res) => {
    const newCar = new car(req.body);
    try {
        const Carcreate = await newCar.save();
        if (!Carcreate) throw new Error('Car creation opperation failed !');
        res.status(200).json(Carcreate);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


//------------ export module ---------------
module.exports = router;