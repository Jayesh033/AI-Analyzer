const axios = require("axios");
const fs = require("fs");

const analyzeImage = async (imagePath) => {
    const imageBase64=
    fs.readFileSync(imagePath).toString("base64");

    const response= await axios.post(
        process.env.OLLAMA_URL,
        {
            model: process.env.OLLAMA_MODEL,
            prompt: `Identify all visible objects.\nReturn JSON array only.`,
            images: [imageBase64],
            stream: false,
        }
    );
    return response.data.response;
};

module.exports = { analyzeImage };
        