const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const port = 5000;
const cors = require('cors');
require('dotenv').config()

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// db connection
const uri = `${process.env.DB}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const formDataCollection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);

    // root route
    app.get('/', (req, res) => {
        res.send('<h1>Server is up & running</h1>')
    })

    // post form data
    app.post('/formData', (req, res) => {
        const data = req.body
        formDataCollection.insertOne(data)
            .then((result, error) => {
                if (result.insertedCount > 0) {
                    res.json({
                        message: 'data successfully inserted'
                    })
                } else {
                    res.json({
                        message: error
                    })
                }
            })
    })

    // post form data
    app.get('/formData', (req, res) => {
        const email = req.query.email
        formDataCollection.find({ email })
            .toArray((err, document) => {
                if (!err) {
                    res.json({
                        data: document,
                        success: true
                    })
                } else {
                    res.json({
                        data: err,
                        success: false
                    })
                }
            })
    })

    // db connected console log message
    console.log('db connected');
    // listen port
    app.listen(process.env.PORT || port, () => {
        console.log('app is listening on port', port);
    })
});


