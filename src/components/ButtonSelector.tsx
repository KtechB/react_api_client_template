import { FC } from "react";
import Button from "./Button";

interface ButtonSelector {
  selectedId: number;
  setSelectedId: (id: number) => void;
  options: string[];
}

const Selector: FC<ButtonSelector> = ({
  selectedId,
  setSelectedId,
  options,
}) => {
  const buttonStyle = "";
  return (
    <div className="flex">
      {options.map((v, i) => (
        <div className="flex items-center ">
          <button
            className={
              i === selectedId
                ? "bg-orange-500 hover:text-glay text-white  py-2 px-4 "
                : "bg-white-500 hover:text-glay text-gray  py-2 px-4 "
            }
            //     checked={i === selectedId}
            onClick={() => setSelectedId(i)}
          >
            {v}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Selector;
