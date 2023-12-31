import Layout from "../Layout";
import TodoInput from "./components/TodoInput";

const TodoPage = () => (
  <Layout>
    <div class="flex flex-col gap-3">
      <div class="relative group rounded-lg shadow-md overflow-hidden bg-[#F9F7F7]">
        <div class="p-4">
          <TodoInput />
        </div>
      </div>

      <div
        id="todo-list-container"
        hx-get="/todo/getTodoList"
        hx-swap="innerHTML"
        hx-trigger="load"
      ></div>
    </div>
  </Layout>
);
export default TodoPage;
