import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="bg-amber-300 text-3xl p-4 rounded-2xl mb-4">TailwindCSS</h1>
      <Card name="Pulkit" btnText="Visit me"/>
    </>
  );
}

export default App;
