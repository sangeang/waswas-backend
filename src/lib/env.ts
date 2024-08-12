const getRequiredEnv = (key: string) => {
  const value = Deno.env.get(key);
  if (!value) throw new Error(`Environment variable ${key} is not set`);

  return value;
};

export const GEMINI_API_KEY = getRequiredEnv("GEMINI_API_KEY");
