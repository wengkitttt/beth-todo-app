const TodoInput = () => (
  <form
    hx-post="/todo/addTodoItem"
    hx-swap="innerHTML"
    hx-target="#todo-list-container"
    _="on submit target.reset()"
    class="flex flex-row justify-between"
  >
    <input
      type="text"
      id="todo"
      name="todo"
      placeholder="What you want to do today?"
      required
      class="w-[100%] bg-[#F9F7F7] focus:outline-none focus:border-b-2 focus:border-gray-600"
    />
    <button type="submit" class="ml-[30px]">
      Add
    </button>
  </form>
);

export default TodoInput;
