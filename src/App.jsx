import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{
              background: "black",
            }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
            style={{
              background: "white",
            }}
          >
            White
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{
              background: "red",
            }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{
              background: "green",
            }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{
              background: "blue",
            }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
            style={{
              background: "pink",
            }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("tomato")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
            style={{
              background: "tomato",
            }}
          >
            Tomato
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
