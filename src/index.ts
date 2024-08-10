import { Hono } from "hono";
import { analyzeRoutes } from "./routes/analyze";
import { HonoEnv } from "./types/env";
import { logger } from "hono/logger";

const app = new Hono<HonoEnv>();

app.use(logger());
app.route("/", analyzeRoutes);

export default app;
