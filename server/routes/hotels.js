const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Hotel = require("../database/hotelsdata");

// POST request
router.post("/", upload.single("image_url"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json(result);
    let hotel = new Hotel();
    hotel.title = req.body.title;
    hotel.city = req.body.city;
    hotel.address = req.body.address;
    hotel.description = req.body.description;
    hotel.single_room = req.body.single_room;
    hotel.double_room = req.body.double_room;
    hotel.image_url = result.secure_url;

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
router.get("/", async (req, res) => {
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
