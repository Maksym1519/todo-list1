"use client";
import Title from "./components/Title/Title";
import TodoList from "./components/TodoList/TodoList";
import ThemeToggle from "@/hooks/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white dark:bg-black dark:text-white transition-all duration-300">
      <div className="w-full max-w-2xl px-4 mt-24">
        <div className="flex gap-4 justify-end mb-24">
            <ThemeToggle />
        </div>
               
        <Title as="h1">Список задач</Title>

        <TodoList />
      </div>
    </div>
  );
}
