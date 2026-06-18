const express = require('express');
const crors = require('cors');

require('dotenv').config();
const app = express();

app.use(crors());
app.use(express.json());    

app.use(crors());
app.use(express.json());

app.use('/api', require('./routes/analyzeRouter'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
