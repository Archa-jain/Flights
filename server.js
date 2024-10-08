const express = require('express');
const flights = require('./routes/flights');

const port = 8000;
const app = express();

app.use('/api/flights', flights);



app.listen(port, () => {
    console.log(`Server is running at the ${port}`);
});