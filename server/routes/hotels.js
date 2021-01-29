const router = require("express").Router();
const Hotel = require("../models/hotelsdata");
//const cloudinary = require("../utils/cloudinary");
//const upload = require("../utils/multer");

// POST request by cloudinary
// router.post("/", upload.single("image_url"), async(req, res) => {
//     try {
//         let hotel = new Hotel();
//         if (req.file) {
//             const result = await cloudinary.uploader.upload(req.file.path);
//             hotel.image_url = result.secure_url;
//         } else {
//             hotel.image_url = req.body.image_url || "";
//         }
//         hotel.title = req.body.title;
//         hotel.city = req.body.city;
//         hotel.address = req.body.address;
//         hotel.stars = req.body.stars;
//         hotel.description = req.body.description;
//         hotel.single_room = req.body.single_room;
//         hotel.double_room = req.body.double_room;

//         await hotel.save();

//         res.json({
//             success: true,
//             message: "Successfuly created a new hotel",
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// });

//------------ create a Hotel ------------------
router.post("/create", async(req, res) => {
    const hotel = req.body;
    let hotelModel = new Hotel(hotel);
    await hotelModel.save();
    console.log(hotelModel)
    res.json(hotelModel);
});

router.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const oneHotel = await Hotel.findById(id);
        if (!oneHotel) throw new Error('No hotel to display error !');
        res.status(200).json(oneHotel);
    } catch (err) {
        res.status(500).json({ message: err.message })
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

//------------ delete a Hotel ------------------
router.delete('/:id', async (req, res) =>{
    try{
        const { id } = req.params
        const deleteHotel = await Hotel.findByIdAndDelete(id);
        console.log(id)
        if(!deleteHotel) throw new Error('Hotel deletion not done !');
        res.status(200).json(deleteHotel);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;