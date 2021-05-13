import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import RouteInput from "./components/RouteInput";
import RouteTable from "./components/RouteTable";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary: rgb(219, 234, 254)
  }

  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

function removeNonAlphanumericFromString(string) {
  return string.replace(/[^a-zA-Z0-9 -]/g, "");
}

function App() {
  const [resource, setResource] = useState("articles");
  const [nestedResource, setNestedResource] = useState("");

  function handleResourceChange(resource) {
    setResource(removeNonAlphanumericFromString(resource));
  }

  function handleNestedResourceChange(resource) {
    setNestedResource(removeNonAlphanumericFromString(resource));
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Wrapper>
        <RouteInput
          resource={resource}
          setResource={handleResourceChange}
          nestedResource={nestedResource}
          setNestedResource={handleNestedResourceChange}
        />

        {resource.length > 0 ? (
          <RouteTable resource={resource} nestedResource={nestedResource} />
        ) : (
          <p>Enter a resource name above! (Alphanumeric characters only)</p>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
  margin: 32px auto;
  text-align: center;
`;

export default App;
