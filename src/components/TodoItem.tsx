import React, { useState } from "react";
import { Todo } from "@/types";
import useTodoStore from "@/store/todoStore";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, updateTodo, deleteTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(todo.title);
  };

  const handleUpdate = () => {
    const trimmedTitle = editedTitle.trim();
    if (trimmedTitle && trimmedTitle !== todo.title) {
      updateTodo(todo.id, { title: trimmedTitle });
    }
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedTitle(todo.title);
    }
  };

  return (
    <div
      className={`todo-item group flex items-center p-2 rounded ${
        todo.completed ? "bg-gray-100 dark:bg-gray-800" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-3 h-5 w-5 text-primary"
      />

      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent border-b-2 border-primary focus:outline-none focus:border-primary"
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={handleEdit}
          className={`flex-grow cursor-pointer ${
            todo.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
          }`}
        >
          {todo.title}
        </span>
      )}

      <div className="ml-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isEditing && (
          <button onClick={handleEdit} className="text-gray-500 hover:text-primary" title="편집">
            ✏
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-gray-500 hover:text-red-500" title="삭제">
          🗑
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
