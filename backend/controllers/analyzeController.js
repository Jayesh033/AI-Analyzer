const { analyzeImage: analyzeImageService } = require("../services/ollamaServices");

exports.analyzeImage = async (req, res) => {
    try{
        const files = req.files;

        const result = await Promise.all(
            files.map(async (file) => {
                const object = await analyzeImageService(file.path);
                return {
                    filename: file.originalname,
                    objects: JSON.parse(object),
                };
            }
        )
        );
        res.json({ 
            success: true,
            images: result,
         });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error analyzing image",
        });
    }
};