import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Todo, TodoState, Filter } from "../types";

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: "all",

      addTodo: (title) =>
        set((state) => {
          const newTodo: Todo = {
            id: Date.now().toString(),
            title,
            completed: false,
            createdAt: new Date().toISOString(),
          };
          return { todos: [...state.todos, newTodo] };
        }),

      toggleTodo: (id: string) =>
        set((state) => {
          const todos = state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
          return { todos };
        }),

      updateTodo: (id: string, updatedTodo: Partial<Todo>) =>
        set((state) => {
          const todos = state.todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo));
          return { todos };
        }),

      updateTodos: (todos: Todo[]) => set({ todos }),

      deleteTodo: (id: string) =>
        set((state) => {
          const todos = state.todos.filter((todo) => todo.id !== id);
          return { todos };
        }),

      clearCompleted: () =>
        set((state) => {
          const todos = state.todos.filter((todo) => !todo.completed);
          return { todos };
        }),

      setFilter: (filter: Filter) => set(() => ({ filter })),
    }),
    {
      name: "todo-storage",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

export default useTodoStore;
