import { useState } from "react";
import "./App.css";
import TeamRandomizer from "./TeamRandomizer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TeamRandomizer />
    </>
  );
}

export default App;
