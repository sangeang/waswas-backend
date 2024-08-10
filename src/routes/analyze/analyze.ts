import { fileToBase64 } from "@/lib/file";
import { getChatSession } from "@/services/ai";
import { HonoEnv } from "@/types/env";
import { Hono } from "hono";

export const analyzeRoutes = new Hono<HonoEnv>();

const MB = 1024 * 1024;

analyzeRoutes.post("/analyze", async (c) => {
  const body = await c.req.parseBody();

  const image = body["image"];

  if (!(image instanceof File)) return c.json({ error: "Invalid image" }, 400);
  if (image.size > 10 * MB) return c.json({ error: "Image is too large" }, 400);

  const chatSession = getChatSession(c.env.GEMINI_API_KEY);

  const reply = await chatSession.sendMessage([
    {
      inlineData: {
        data: await fileToBase64(image),
        mimeType: image.type,
      },
    },
  ]);

  return c.json({ message: reply.response.text() }, 200);
});
