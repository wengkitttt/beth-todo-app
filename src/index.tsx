import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import TodoRoute from "./routes/todo/TodoRoute";
import Layout from "./pages/Layout";

const app = new Elysia().use(html()).get("/", () => (
  <Layout>
    <div
      hx-get="/todo"
      hx-swap="outerHTML"
      hx-trigger="load"
      hx-push-url="true"
    ></div>
  </Layout>
));

app.use(TodoRoute);
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
