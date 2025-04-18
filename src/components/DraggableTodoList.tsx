import { useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useTodoStore from "../store/todoStore";
import DraggableTodoItem from "./DraggableTodoItem";
// import { Todo } from "../types";

const DraggableTodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const updateTodos = useTodoStore((state) => state.updateTodos);

  // 필터링된 할 일 목록
  const filteredTodos = (() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  })();

  // 드래그 앤 드롭 후 순서 조정 함수
  const moveTodo = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const draggedTodo = filteredTodos[dragIndex];
      const newTodos = [...filteredTodos];
      newTodos.splice(dragIndex, 1);
      newTodos.splice(hoverIndex, 0, draggedTodo);
      // 필터링된 목록이 아니라 전체 목록에서의 순서를 업데이트해야 함
      const updatedTodos = [...todos];
      filteredTodos.forEach((todo, i) => {
        const originalIndex = todos.findIndex((t) => t.id === todo.id);
        updatedTodos[originalIndex] = newTodos[i];
      });
      updateTodos(updatedTodos);
    },
    [filteredTodos, todos, updateTodos]
  );

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
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-2">
        {filteredTodos.map((todo, index) => (
          <DraggableTodoItem key={todo.id} index={index} todo={todo} moveTodo={moveTodo} />
        ))}
      </div>
    </DndProvider>
  );
};

export default DraggableTodoList;
