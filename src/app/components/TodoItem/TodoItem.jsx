"use client";

import Image from "next/image";
import Button from "../Button/Button";
import Input from "../Input/Input";

const TodoItem = ({ title, onDelete }) => {
  return (
    <div className="todo-item flex gap-4 border border-gray-300 rounded-md px-4 py-2 dark:text-black">
      <Input type={'checkbox'} className='w-[30px] h-[30px'/>
      <p className="w-full">
        {title}
      </p>

      <Button handleClick={onDelete} className='#'>
        <Image
          src={"cancel-close-svgrepo-com.svg"}
          width={30}
          height={30}
          alt="close"
        />
      </Button>
    </div>
  );
};

export default TodoItem;
