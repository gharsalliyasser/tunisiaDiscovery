const { PORT, mongoUri } = require("./config");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const CarRoutes = require("./routes/Cars");
const HotelRoutes = require("./routes/hotels");
const PlaceRoutes = require("./routes/place");
const usersRoutes = require("./routes/users");
const hotelpaymentRoutes = require("./routes/hotelpayment");


const app = express();

// Setting up basic middleware for all Express requests
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(express.json());

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("mongo-DB connected"))
    .catch((err) => console.log(err));

//app.use(express.json({extended:false}));
app.use("/api/Car", CarRoutes);
app.use("/api/hotels", HotelRoutes);
app.use("/api/place", PlaceRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hotelpayment", hotelpaymentRoutes);
//testing server activation on first run
//  app.get('/', (req, res) =>{
//      res.send('HEllo')
//  })

app.listen(PORT, () => console.log(`logged on PORT ${PORT}`));