const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, mongoUri } = require('./config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-Parser');

const usersRoutes = require('./routes/api/users')
const CarRoutes = require('./routes/api/Cars');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log('mongo-DB connected'))
.catch((err) => console.log(err));


app.use('/api/users', usersRoutes);
app.use('/api/Cars', CarRoutes);


//testing server activation on first run
//  app.get('/', (req, res) =>{
//      res.send('HEllo')
//  })

app.listen(PORT, () => console.log(`logged on PORT ${PORT}`));






