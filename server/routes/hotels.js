const router = require('express').Router();
const Hotel = require('../database/hotelsdata');

// POST request
router.post('/hotels', async(req, res) => {
    try {
        let hotel = new Hotel();
        hotel.title = req.body.title;
        hotel.city = req.body.city;
        hotel.address = req.body.address;
        hotel.description = req.body.description;
        hotel.single_room = req.body.single_room;
        hotel.double_room = req.body.double_room;
    

        await hotel.save();

        res.json({
            success: true,
            message: "Successfuly created a new hotel"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
});


// GET request - get all hotels
router.get("/hotels", async(req, res) => {
    try {
        let hotels = await Hotel.find();
        console.log(hotels)
        res.json({
            success: true,
            hotels: hotels
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;