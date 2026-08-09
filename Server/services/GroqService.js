import "dotenv/config";
import OpenAI from "openai";
console.log("GROQ_API_KEY:", process.env.GROQ_API_KEY);
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function askAI(prompt) {
  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are an expert AI Assistant for a Student Management System.

Rules:
- Always answer professionally.
- Use Markdown formatting.
- Use headings (#, ##, ###).
- Use **bold** for important information.
- Use bullet points whenever appropriate.
- Use numbered lists for steps.
- Use tables when displaying records.
- Never return HTML.
- Never invent data.
- If information is unavailable, say "No data found."
`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}
