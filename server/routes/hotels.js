const router = require("express").Router();
const Hotel = require("../models/hotelsdata");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

// POST request
router.post("/", upload.single("image_url"), async(req, res) => {
    try {
        let hotel = new Hotel();
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            hotel.image_url = result.secure_url;
        } else {
            hotel.image_url = req.body.image_url || "";
        }
        hotel.title = req.body.title;
        hotel.city = req.body.city;
        hotel.address = req.body.address;
        hotel.stars = req.body.stars;
        hotel.description = req.body.description;
        hotel.single_room = req.body.single_room;
        hotel.double_room = req.body.double_room;

        await hotel.save();

        res.json({
            success: true,
            message: "Successfuly created a new hotel",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// GET request - get all hotels
router.get("/", async(req, res) => {
    try {
        let hotels = await Hotel.find();
        console.log(hotels);
        res.json({
            success: true,
            hotels: hotels,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;