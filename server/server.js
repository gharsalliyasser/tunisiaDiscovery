const { PORT, mongoUri } = require('./config')
const bodyParser = require('body-Parser')
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const CarRoutes = require('./routes/api/Cars');
const PlaceRoutes = require('./routes/api/place')
const usersRoutes = require("./routes/api/users");
const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => console.log('mongo-DB connected'))
    .catch((err) => console.log(err));

//app.use(express.json({extended:false}));
app.use('/api/Car', CarRoutes);
app.use('/api/place',PlaceRoutes)
app.use("/api/users", usersRoutes);

//testing server activation on first run
//  app.get('/', (req, res) =>{
//      res.send('HEllo')
//  })

app.listen(PORT, () => console.log(`logged on PORT ${PORT}`));