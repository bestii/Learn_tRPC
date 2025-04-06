import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";

const Home = async () => {
  const todos = await serverClient.todo.getTodos();

  return (
    <>
      <header>Header</header>
      <main className="flex flex-col">
        <TodoList todos={todos} />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
