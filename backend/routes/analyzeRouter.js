const express = require('express');
const router = express.Router();

const upload = require('../middleware/uploadMiddleWare');

const {
    analyzeImage,
}= require('../controllers/analyzeController');

router.post('/analyze', upload.array('images'), analyzeImage);

module.exports = router;