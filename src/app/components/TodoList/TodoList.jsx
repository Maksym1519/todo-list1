import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const getValue = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = () => {
    if (inputValue.trim() !== "") {
      const currentDate = new Date(); 
      setTodoItems([
        ...todoItems,
        {
          id: Date.now(),
          title: inputValue,
          createdAt: currentDate, 
        },
      ]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id)); 
  };

const handleCurrentDate = () => {
  const date = new Date()
  setCurrentDate(date)
}
 
  return (
    <div className="todo-list flex flex-col gap-8 bg-white w-full p-8">
      <TodoForm
        getValue={getValue}
        inputValue={inputValue}
        addNewTodo={addNewTodo}
      />
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          onDelete={() => deleteTodo(item.id)} 
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};

export default TodoList;