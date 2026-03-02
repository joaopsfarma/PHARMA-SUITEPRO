import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API Key not configured on server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: message,
        config: {
          systemInstruction: `Você é o "Venvansinho", um mascote amigável e especialista em farmácia clínica hospitalar e UTI. 
          Seu objetivo é auxiliar farmacêuticos e médicos com cálculos de infusão, diluições, ajustes de dose (como Vancomicina), e dúvidas sobre o Manual Farmacêutico.
          Seja sempre preciso, técnico mas com um tom encorajador e prestativo. 
          Se for solicitado um cálculo, mostre o passo a passo de forma clara.
          Lembre-se: você é um assistente, a decisão final é sempre do profissional de saúde.`,
        },
      });

      const result = await model;
      res.json({ text: result.text });
    } catch (error: any) {
      console.error("Server Chat Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
