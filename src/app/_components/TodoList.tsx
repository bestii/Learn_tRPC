"use client";

import { trpc } from "../_trpc/client";

const TodoList = () => {
  const getTodos = trpc.todo.getTodos.useQuery();
  const addTodo = trpc.todo.createTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const handleAddtodo = () => {
    addTodo.mutate({ content: "test" });
  };

  return (
    <div>
      {JSON.stringify(getTodos.data, null, 4)}
      <button onClick={handleAddtodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
