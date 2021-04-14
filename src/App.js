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

function App() {
  const [resource, setResource] = useState("articles");
  const [nestedResource, setNestedResource] = useState("");

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Wrapper>
        <RouteInput
          resource={resource}
          setResource={setResource}
          nestedResource={nestedResource}
          setNestedResource={setNestedResource}
        />

        {resource.length > 0 ? (
          <RouteTable resource={resource} nestedResource={nestedResource} />
        ) : (
          <p>Enter a resource name above!</p>
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
