const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {PORT, mongoUri} = require('./config')
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-Parser')
const hotelsRoutes = require('./routes/api/hotels')

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(()=> console.log('mongo-DB connected'))
.catch((err)=> console.log(err));

app.use('api/hotels', hotelsRoutes);

app.listen(PORT, ()=> console.log(`logged on PORT ${PORT}`));

// const usersRoutes = require('./routes/api/users')
// const articlesRoutes = require('./routes/api/articles')
// const newsRoutes = require('./routes/api/news')
// app.use('/api/users', usersRoutes);
// app.use('/api/articles', articlesRoutes);

//testing server activation on first run
// app.get('/', (req, res) =>{
//     res.send('HEllo')
// })
