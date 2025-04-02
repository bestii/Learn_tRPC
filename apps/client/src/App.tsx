import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { type AppRouter } from "@trpc/shared";

function App() {
  const [count, setCount] = useState(0);

  const client = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "http://localhost:4000/trpc",
      }),
    ],
  });

  const handleOnAdd = async () => {
    setCount((prev) => prev + 1);
    const result = await client.logToServer.mutate({
      message: `Here is the Count: ${count}`,
    });
    console.log("🚀 ~ handleOnAdd ~ result:", result);
    const user = await client.users.getUser.query();
    console.log("🚀 ~ handleOnAdd ~ user:", user);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnAdd}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
