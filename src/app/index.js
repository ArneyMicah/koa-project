import koa from "koa";
import cors from "@koa/cors"
import router from "../router/index.js";
const app = new koa();
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;