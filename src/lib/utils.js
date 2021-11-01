export const filterTodo = (filter, todos) =>
  filter
    ? todos.filter((todo) => todo.isComplete === (filter === "completed"))
    : todos;
