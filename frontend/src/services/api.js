import axios from "axios";

export const analyzeImage = async (Files) => {
    const formData = new FormData();
    Files.forEach((file) => {
        formData.append("images", file);
    });

    const response = await axios.post("http://localhost:5000/api/analyze", formData);

    return response.data;
};