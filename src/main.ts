import { Hono } from "@hono/hono";
import { logger } from "@hono/hono/logger";
import { analyzeRoutes } from "@routes/analyze.ts";

const app = new Hono();

app.use(logger());
app.route("/", analyzeRoutes);

export default app;
