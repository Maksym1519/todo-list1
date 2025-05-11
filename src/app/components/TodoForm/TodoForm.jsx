"use client";

import { Button } from "@/components/ui/button";
import Input from "../Input/Input";

const TodoForm = ({getValue,inputValue, addNewTodo}) => {
 
  
  return (
    <form className="flex gap-4 mb-4">
      <Input
        placeholder="Введите новую задачу"
        value={inputValue}
        onChange={(e) => getValue(e)}
      />
      
    <Button className='dark:bg-black text-white' type='button' onClick={addNewTodo}>Добавить</Button>
    </form>
  );
};

export default TodoForm;
