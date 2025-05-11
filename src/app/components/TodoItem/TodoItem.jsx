"use client";

import Image from "next/image";
import Button from "../Button/Button";
import Input from "../Input/Input";

const TodoItem = ({ title, onDelete, createdAt }) => {
  const formattedDateTime = createdAt
  ? createdAt.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  : "Дата неизвестна";

  return (
    <div className="todo-item flex gap-4 items-center border border-gray-300 rounded-md px-4 py-2 dark:text-black">
      <Input type={'checkbox'} className='w-[30px] h-[30px'/>
      <p className="w-full">
        {title}
      </p>

      <p className="text-sm text-black-500 whitespace-nowrap">{formattedDateTime}</p>
    
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
