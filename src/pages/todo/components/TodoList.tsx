const TodoItemContainer = ({ id, name, isCheck }: any) => (
  <div
    class="relative group rounded-lg shadow-md overflow-hidden bg-[#F9F7F7]"
    id={id}
  >
    <div class="p-4 flex flex-row justify-between">
      <p>{name}</p>
      <input type="checkbox" checked={isCheck} />
    </div>
  </div>
);

const TodoList = ({ mockData }: any) => {
  return (
    <div class="flex flex-col gap-1">
      {mockData.map((data: { id: Number; name: String; isCheck: Boolean }) => (
        <TodoItemContainer
          id={data.id}
          name={data.name}
          isCheck={data.isCheck}
        />
      ))}
    </div>
  );
};
export default TodoList;
