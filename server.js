const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Parse JSON data
//setup  cors for every domain
app.use(cors({
  origin: '*'
}));
// Gemini API endpoint and key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Load API key from .env
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

app.post("/upload", async (req, res) => {
  const jsonData = req.body; // Received JSON file content
  try {
    // Extract titles & URLs
    const extractedData = jsonData["Browser History"].map((item) => ({
      title: item.title,
      url: item.url,
    }));

    // Construct the prompt for Gemini
    const prompt = `Based on the following browser history, generate a speculative and exaggerated life story of the user. Your response should be in a fun, quirky, and psychoanalytical tone—like an online personality quiz result. Create a story that feels deeply personal, as if you truly understand them. Use humor, sarcasm, and deep insights. The user has searched for:\n\n${JSON.stringify(extractedData)}`;

    // Send data to Gemini API
    const aiResponse = await axios.post(
      GEMINI_API_URL,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the generated text from the response
    const generatedText = aiResponse.data.candidates[0].content.parts[0].text;

    // Send the generated autobiography as the response
    res.json({ autobiography: generatedText });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));