import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";
import { useMemo } from "react";
// import { Todo } from "../types";

const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);
  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500 dark:text-gray-400">
        {filter === "all"
          ? "할 일이 없습니다. 새로운 할 일을 추가해보세요!"
          : filter === "active"
          ? "미완료된 할 일이 없습니다."
          : "완료된 할 일이 없습니다."}
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
