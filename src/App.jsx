import "./App.css";
import Form from "./components/Form";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  return (
    <>
      <Form setState={setState} setInfo={setInfo} />
      <Info info={info} state={state} />
    </>
  );
}

export default App;
