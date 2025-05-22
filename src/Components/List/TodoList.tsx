import type { FC, Key } from "react";
import ActionBtn from "../ActionBtns/ActionBtn";
import { faCheck, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TodosProp = {
  todoKey: number;
  todo: string;
  delete: () => void;
  complete: () => void;
  disabled: boolean;
  bgColor: string;
  txtColor: string;
};

const TodoList: FC<TodosProp> = ({
  todoKey,
  todo,
  delete: deleteTodo,
  complete: completeTodo,
  disabled,
  bgColor,
  txtColor,
}) => {
  return (
    <ul className="p-5 m-2 bg-gray-50 w-full rounded-md shadow-sm ">
        
      <li key={todoKey} className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faPencil} className={`${txtColor}`}/>
          <p className={`font-semibold ${txtColor}`}>{todo}</p>
        </div>
        <div className="flex gap-2">
          <ActionBtn
            setIcon={faTrash}
            hoverBg="hover:bg-red-500"
            Btnlabel="Delete"
            onClick={deleteTodo}
            setBg="bg-purple-500"
          />
          <ActionBtn
            setIcon={faCheck}
            hoverBg="hover:bg-green-500"
            Btnlabel="Complete"
            onClick={completeTodo}
            setDisabled={disabled}
            setBg={bgColor}
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
