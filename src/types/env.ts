type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key];
};

type Env = {
  GEMINI_API_KEY: string;
};

export type HonoEnv = {
  Bindings: Bindings & Env;
};
