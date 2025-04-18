export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  category?: string;
  dueDate?: string;
  priority?: string;
}

export type Filter = "all" | "active" | "completed";

export interface TodoState {
  todos: Todo[];
  filter: Filter;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, updatedTodo: Partial<Todo>) => void;
  updateTodos: (todos: Todo[]) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: Filter) => void;
}
