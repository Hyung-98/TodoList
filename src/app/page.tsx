"use client";

import { useEffect } from "react";
import TodoForm from "../components/TodoForm";
import FilterBar from "../components/FilterBar";
import TodoList from "../components/TodoList";
import StatusBar from "../components/StatusBar";
import DraggableTodoList from "@/components/DraggableTodoList";

export default function Home() {
  // Hydration 이슈 방지를 위한 useEffect
  useEffect(() => {
    // Zustand persist SSR 이슈 해결
    // 이 부분은 컴포넌트가 마운트된 후에만 실행됨
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">할 일 관리</h2>
      <TodoForm />
      <FilterBar />
      {/* <TodoList /> */}
      <DraggableTodoList />
      <StatusBar />
    </div>
  );
}
