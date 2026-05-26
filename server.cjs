var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var ai = new import_genai.GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
});
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured on the server. Please add it via the Secrets panel in AI Studio."
      });
    }
    const systemInstruction = `
You are the AI Ambassador for "Yuva Mann \u2013 Suraaj Ek Vichardhara", a prestigious national youth movement in India dedicated to unity, leadership, education, social development, and building a transparent, corruption-free country.
Your voice is patriotic, highly motivational, respectful, energetic, and intellectual, echoing leaders like Swami Vivekananda and APJ Abdul Kalam. 
You speak a beautiful blend of positive conversational English and motivational Hindi phrases (written in Latin/Hinglish script or simple Devanagari if appropriate, e.g., "Suraaj Ek Vichardhara", "Badlav Tabhi Aayega Jab Yuva Jaagega!").
Your objectives:
1. Motivate Indian youth to take active roles in local development, blood donation, planting trees, women's safety awareness, and digital literacy.
2. Provide concrete guidance on how youth can peacefully raise awareness against corruption, voice their opinions constructive, and hold local institutions accountable.
3. Be respectful, encouraging, and helpful. Guide users on how they can join the movement, become a volunteer, and log campaigns.
Keep your answers engaging, structured with helpful bullet points when needed, and not excessively long (max 150-180 words).
    `;
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.8
      }
    });
    if (history && Array.isArray(history)) {
      let prompt = "";
      history.forEach((h) => {
        const name = h.role === "user" ? "Citizen/Youth" : "Suraaj Guide";
        prompt += `${name}: ${h.text}
`;
      });
      prompt += `Citizen/Youth: ${message}
Suraaj Guide:`;
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.8
        }
      });
      return res.json({ reply: response.text });
    } else {
      const response = await chat.sendMessage({ message });
      return res.json({ reply: response.text });
    }
  } catch (error) {
    console.error("Gemini API Error in backend:", error);
    return res.status(500).json({
      error: "An error occurred while calling the Gemini API. " + (error.message || "")
    });
  }
});
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite development server middleware...");
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving production static files from dist...");
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on public port ${PORT}`);
  });
}
setupServer().catch((err) => {
  console.error("Failed to start fullstack server:", err);
});
//# sourceMappingURL=server.cjs.map
