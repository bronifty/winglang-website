import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [configData, setConfigData] = React.useState("");
  const [responseText, setResponseText] = React.useState("");

  React.useEffect(() => {
    async function getApi() {
      const res = await fetch("/config.json");
      const data = await res.json();
      setConfigData(data);
      console.log(configData);
    }
    getApi();
  }, []);

  async function handleClick() {
    const res = await fetch(`${configData.api}/hello-static`, {
      method: "POST",
      body: "Hello, world!",
    });
    const response = await res.text();
    setResponseText(response);
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Hello, Wing From React Client Vite
        </h1>
        <button
          id="helloButton"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleClick}>
          Say Hello
        </button>
        <div id="hello" className="mt-4">
          {responseText}
        </div>
      </div>
    </>
  );
}

export default App;
