import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("beige")}
            className="outline-none px-6 py-1 rounded-2xl"
            style={{ backgroundColor: "beige" }}
          >
            Beige
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-6 py-1 rounded-2xl"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-6 py-1 rounded-2xl"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-6 py-1 rounded-2xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-6 py-1 rounded-2xl"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

//Never Ever type this in onClick
// onClick{changeBG("red")} This is not valid syntax and will give infinite re-render ❌
// onClick{()=>setColor("red")} This is giving function referance and that function is calling setColor ✅
