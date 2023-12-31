import Elysia from "elysia";
import TodoPage from "../../pages/todo/TodoPage";
import TodoList from "../../pages/todo/components/TodoList";

const db = [
  { id: 0, name: "Go buy dog food.", isCheck: false },
  { id: 1, name: "Finish coding assignment.", isCheck: true },
  { id: 2, name: "Call mom.", isCheck: false },
  { id: 3, name: "Read a chapter of a book.", isCheck: false },
  { id: 4, name: "Go for a jog.", isCheck: true },
];

const TodoRoute = new Elysia({ prefix: "/todo" })
  .get("/", () => <TodoPage />)
  .post("/addTodoItem", ({ body }: any) => {
    const { todo } = body;
    const newId = db[db.length - 1].id + 1;

    db.push({ id: newId, name: todo, isCheck: false });
    return <TodoList mockData={db} />;
  })
  .post("/deleteTodoItem", () => <h1>Delete Page</h1>)
  .post("/updateTodoItem", () => <h1>Delete Page</h1>)
  .get("/getTodoList", () => {
    return <TodoList mockData={db} />;
  });

export default TodoRoute;
