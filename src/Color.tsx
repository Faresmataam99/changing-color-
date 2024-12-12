import { useState } from "react";

export default () => {
  const [Color, setColor] = useState<string>("");

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
    const green = Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
    const blue = Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
    const randomColor = `#${red}${green}${blue}`;
    setColor(randomColor);
  };

  return (
    <>
      <main>
        <div
          className="grid grid-cols-3 gap-4 h-screen items-center justify-center"
          onClick={generateRandomColor}
          style={{ backgroundColor: Color }}
        >
          <p className="text-4xl font-bold text-white text-center">
            Good evening <br />
            Britain! 🇬🇧 💷
          </p>
        </div>
      </main>
    </>
  );
};