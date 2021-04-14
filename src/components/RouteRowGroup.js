import { useState } from "react";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import styled from "styled-components";

function formatJs(string) {
  return prettier.format(string, {
    parser: "babel",
    plugins: [parserBabel],
  });
}

function RouteRowGroup({ route }) {
  const [isHidden, setIsHidden] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const { resourceName, method, endpoint, description, fetchExample } = route;

  function handleCopy(e) {
    const text = e.target.innerText;
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    });
  }

  return (
    <>
      <DefinitionRow
        className={isHidden ? null : "in-use"}
        onClick={() => setIsHidden((isHidden) => !isHidden)}
      >
        <td>
          <span>{method}</span>
        </td>
        <td>
          <span>{endpoint}</span>
        </td>
        <td>
          <span>{resourceName}</span>
        </td>
        <td>
          <span>{description}</span>
        </td>
      </DefinitionRow>
      <InfoRow className={isHidden ? null : "in-use"}>
        <td colSpan="4">
          <p>Fetch Example</p>
          <pre onClick={handleCopy}>{formatJs(fetchExample)}</pre>
          <p>{isCopied ? "Copied!" : "(click code to copy)"}</p>
        </td>
      </InfoRow>
    </>
  );
}

const DefinitionRow = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
  }

  &.in-use {
    background-color: var(--primary);
  }
`;

const InfoRow = styled.tr`
  display: none;

  &.in-use {
    display: table-row;
  }

  pre {
    background-color: #f7f7f7;
    font-family: monospace;
    white-space: pre;
    padding: 8px;
    cursor: copy;
  }
`;

export default RouteRowGroup;
