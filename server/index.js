require('dotenv').config();
const express = require('express');
const app = express ();
const bodyParser = require ( 'body-parser');
const port = process.env.PORT || 3000;
const router = require('./src/router');
const cors = require('cors');

app.use(cors());

console.log(process.env.MONGODB_URI)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hakkama said!')
})

app.use('/api', router)

app.listen (port, () => {
    console.log(`Server started on port ${port}`)
});