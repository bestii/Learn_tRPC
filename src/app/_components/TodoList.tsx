"use client";

import { trpc } from "../_trpc/client";

const TodoList = () => {
  const getTodos = trpc.todo.getTodos.useQuery();

  return <div>{JSON.stringify(getTodos.data, null, 4)}</div>;
};

export default TodoList;
