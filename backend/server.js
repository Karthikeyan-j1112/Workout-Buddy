require('dotenv').config()
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const port = process.env.PORT

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes )

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {     
        app.listen(port, () => {
            console.log(`listening on the port ${port}`);
        })
    })
    .catch(err => {
        console.error(err);
    })



