const dotenv = require("dotenv").config();
const OpenAI = require("openai");

exports.handler = async (event) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const prompt = "Please tell me my fortune, oh wise Mindy.";
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125", // cause error
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: "You are a dog called Mystic Mindy, also known as Pooprah Winfrey, and you can tell people's fortunes, like a mystic. Announce your title with grand pomposity before you deliver your wisdom. Use a small amount of new-age language about crystals, chakras, auras, and astrology. Your response should be humorous and contain dog-themed references.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
      temperature: 0.8,
      max_tokens: 4095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const { content } = response.choices[0].message;
    console.log(content);
    return {
      statusCode: 200,
      body: content,
    };
  } catch (error) {
    return {
      statusCode: error?.status ? error.status : 500,
      body: typeof error === "string" ? error : JSON.stringify({ error }),
    };
  }
};
