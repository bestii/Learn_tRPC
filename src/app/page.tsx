import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <>
      <header>Header</header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TodoList />
      </main>
      <footer>Footer</footer>
    </>
  );
}
