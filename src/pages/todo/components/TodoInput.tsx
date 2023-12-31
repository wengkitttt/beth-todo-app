const TodoInput = () => (
  <form
    hx-post="/todo/addTodoItem"
    hx-swap="innerHTML"
    hx-target="#todo-list-container"
    _="on submit target.reset()"
  >
    <label for="todo"></label>
    <input
      type="text"
      id="todo"
      name="todo"
      placeholder="I want to..."
      required
    />
    <button type="submit">Add</button>
  </form>
);

export default TodoInput;
