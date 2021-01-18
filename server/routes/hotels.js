const { Router } = require('express');
const Hotel = require('../../database/hotelsdata');
const router = Router();

router.post('/', async(req, res) => {
    const { title, id, city, address, stars, description, image_url, single_room, double_room } = req.body;
})
let hotels = {};
hotels.title = title;
hotels.id = id;
hotels.city = city;
hotels.address = address;
hotels.stars = stars;
hotels.description = description;
hotels.image_url = image_url;
hotels.single_room = single_room;
hotels.double_room = double_room;
let hotelModel = new Hotel(hotels);
await hotelModel.save();
res.json(hotelModel);

// Retrieving all hotels

router.get('/', async (req, res) => {
    try{
        const hotels = await Hotel.find();
        if(!hotels) throw new Error(' No hotels to display!');
        res.status(200).json();
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;