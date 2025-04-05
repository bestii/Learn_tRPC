import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const todos = await serverClient.todo.getTodos();

  return (
    <>
      <header>Header</header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TodoList todos={todos} />
      </main>
      <footer>Footer</footer>
    </>
  );
}
