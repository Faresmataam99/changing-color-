import { useState } from "react";
import { UpperCase, LowerCase, reverse } from "./Functions";
import Color from "./Color";

export default () => {
  const [text, setText] = useState<string>("Good evening! Grab some tea");

  const handleReverse = () => {
    setText(reverse(text));
  };

  const handleUpperCase = () => {
    setText(UpperCase(text));
  };

  const handleLowerCase = () => {
    setText(LowerCase(text));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">

      <span className="text-4xl font-bold mb-4">{text}</span>


      <div className="space-x-4">
        <button
          onClick={handleReverse}
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Reverse
        </button>
        <button
          onClick={handleUpperCase}
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Capital
        </button>
        <button
          onClick={handleLowerCase}
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Lower
        </button>
      </div>

        <Color/>

    </div>
  );
};