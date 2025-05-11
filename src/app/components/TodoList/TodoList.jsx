import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  console.log(todoItems)

  const getValue = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = () => {
    if (inputValue.trim() !== "") {
      setTodoItems([
        ...todoItems,
        { id: Date.now(), title: inputValue },
      ]);
      setInputValue(""); 
    }
  };

  const deleteTodo = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id)); 
  };

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
        />
      ))}
    </div>
  );
};

export default TodoList;