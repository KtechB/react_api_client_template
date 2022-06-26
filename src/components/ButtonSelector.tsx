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
  return (
    <div className="flex">
      {options.map((v, i) => (
        <div className="flex items-ceuter">
          <button
            className={
              (i === selectedId
                ? "bg-orange-500 hover:text-glay text-white  py-2 px-4  shadow-inner"
                : "hover:text-glay text-gray  py-2 px-4 shadow-inner bg-slate-50") +
              " " +
              (i === 0
                ? "rounded-l-2xl"
                : i === options.length - 1
                ? "rounded-r-2xl"
                : "")
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
