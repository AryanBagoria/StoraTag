// Include the mongose module
const mongoose = require('mongoose');

// Connect to the cluster
mongoose.connect('mongodb+srv://nandini:nandini123@cluster0.9q8m9.mongodb.net/StoraTAG', { useNewUrlParser: true, useUnifiedTopology: true });

// Include the sack module
const Sack = require('./models/sack');

// Include and initialise express module
const express = require('express');
const app = express();

// Include body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Initialize port
const port = 5002;

app.get('/api/sacks', (req, res) => {
    Sack.find({}, (err, sacks) => {
        if (err == true) {
            return res.send(err);
        } else {
            return res.send(sacks);
        }
    });
});

app.post('/api/sacks', (req, res) => {
    const { uid, entry_date, expiration_date, location, weight, moisture, cost, floor_location, sensorData } = req.body;
    const newSack = new Sack({
        uid,
        entry_date,
        expiration_date,
        location,
        weight,
        moisture,
        cost,
        floor_location,
        sensorData
    });
    newSack.save(err => {
        return err
            ? res.send(err)
            : res.send('successfully added sack and data');
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
