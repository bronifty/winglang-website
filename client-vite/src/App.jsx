import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [api, setApi] = React.useState("");
  React.useEffect(() => {
    async function getApi() {
      const res = await fetch("/config.json");
      const data = await res.json();
      setApi(data.api);
    }
    getApi();
  }, []);


  return (
    <>
      <div class="text-center">
        <h1 class="text-2xl font-bold">Hello, Wing</h1>
        <button
          id="helloButton"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Say Hello
        </button>
        <div id="hello" class="mt-4"></div>
      </div>
    </>
  );
}

export default App;


<script>
let configData, helloButton, helloDiv;
helloButton = document.getElementById("helloButton");
helloDiv = document.getElementById("hello");

async function getApi() {
  const res = await fetch("/config.json");
  const data = await res.json();
  configData = data;
  console.log(configData);
}
getApi();

async function clickHandler() {
  const res = await fetch(`${configData.api}/hello-static`, {
    method: "POST",
    body: "Hello, world!",
  });
  const response = await res.text();
  helloDiv.innerHTML = response;
}
helloButton.addEventListener("click", clickHandler);
</script>