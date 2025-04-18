import { useState } from "react";
import useTodoStore from "@/store/todoStore";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();

    if (trimmedTitle) {
      addTodo(trimmedTitle);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="input flex-grow"
          data-testid="todo-input"
        />
        <button type="submit" className="ml-2 btn" disabled={!title.trim()} data-testid="add-button">
          추가
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
