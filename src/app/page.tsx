"use client";

import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string>();

  const logout = () => {
    setUser(undefined);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-xl pr-2 pl-2">
          <div className="w-24"></div>
          Stepful
          {!user && <div className="w-24"></div>}
          {user && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
        {!user && (
          <div className="w-full flex items-center justify-center gap-3">
            <button className="btn" onClick={() => setUser("student")}>
              Student
            </button>
            <button className="btn" onClick={() => setUser("coach")}>
              Coach
            </button>
          </div>
        )}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none pb-2">
          Stepful 2024
        </div>
      </div>
    </main>
  );
}
