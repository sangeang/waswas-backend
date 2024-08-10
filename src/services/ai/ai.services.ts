import { GenerationConfig } from "@google/generative-ai";
import { getModel } from "./ai.model";

const generationConfig: GenerationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const getChatSession = (apiKey: string) => {
  const model = getModel(apiKey);

  return model.startChat({
    generationConfig,
  });
};
