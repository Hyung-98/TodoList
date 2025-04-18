import useTodoStore from "../store/todoStore";

const StatusBar: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.length - activeTodosCount;
  return (
    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
      <span>{activeTodosCount} 항목 남음</span>
      {completedTodosCount > 0 && (
        <button onClick={clearCompleted} className="text-primary hover:underline">
          완료 항목 삭제 ({completedTodosCount})
        </button>
      )}
    </div>
  );
};
export default StatusBar;
