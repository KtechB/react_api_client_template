import { FC } from "react";

interface SelectorProps {
  selectedId: number;
  setSelectedId: (id: number) => void;
  options: string[];
}

const Selector: FC<SelectorProps> = ({
  selectedId,
  setSelectedId,
  options,
}) => {
  return (
    <div className="flex">
      {options.map((v, i) => (
        <div className="flex items-center mr-4">
          <input
            id="inline-checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={i === selectedId}
            onChange={() => setSelectedId(i)}
            value={"hoge"}
          />
          <label
            htmlFor="inline-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {v}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Selector;
