import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export default openAi;
