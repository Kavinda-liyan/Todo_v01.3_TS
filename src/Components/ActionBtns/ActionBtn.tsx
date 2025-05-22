import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
type ActionProps = {
  setBg: string;
  setIcon: any;
  hoverBg: string;
  Btnlabel: string;
  onClick?: () => void;
  setDisabled?: boolean;
};

const ActionBtn: FC<ActionProps> = ({
  setIcon,
  hoverBg,
  Btnlabel,
  onClick,
  setDisabled,
  setBg,
}) => {
  return (
    <button
      disabled={setDisabled}
      onClick={onClick}
      aria-label={Btnlabel}
      className={`font-bold text-gray-50 w-8 h-8 p-1 rounded-md ${setBg} shadow-sm hover:cursor-pointer ${hoverBg} duration-150`}
    >
      <FontAwesomeIcon icon={setIcon} />
    </button>
  );
};

export default ActionBtn;
