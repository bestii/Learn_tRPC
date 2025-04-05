"use client";

import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";

type TodoListProps = {
  todos: Awaited<ReturnType<typeof serverClient.todo.getTodos>>;
};

const TodoList = ({ todos }: TodoListProps) => {
  const getTodos = trpc.todo.getTodos.useQuery(undefined, {
    initialData: todos,
  });
  const addTodo = trpc.todo.createTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const updateTodo = trpc.todo.updateTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const handleAddtodo = () => {
    addTodo.mutate({ content: "test" });
  };

  const handleUpdateTodo = () => {
    updateTodo.mutate({ id: 2, content: "New Test", done: 1 });
  };

  return (
    <div>
      {JSON.stringify(getTodos.data, null, 4)}
      <button onClick={handleAddtodo}>Add Todo</button>
      <button onClick={handleUpdateTodo}>Update Todo</button>
    </div>
  );
};

export default TodoList;
