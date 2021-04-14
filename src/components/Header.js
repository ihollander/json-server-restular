import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h1>
        /REST<span className="subhead">acular</span>
      </h1>
      <p>
        A{" "}
        <a
          href="https://github.com/typicode/json-server"
          target="_blank"
          rel="noreferrer"
        >
          json-server
        </a>{" "}
        routing resource, inspired by{" "}
        <a href="http://www.restular.com/" target="_blank" rel="noreferrer">
          RESTular
        </a>
        .
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  text-shadow: 0 0 1px rgb(0 0 0 / 30%);
  text-align: left;
  padding-left: 12%;
  height: 8em;
  width: 100%;
  background-color: var(--primary);
  padding-top: 5px;

  h1 {
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .subhead {
    color: rgb(100, 100, 100);
  }

  a {
    color: inherit;
  }
`;

export default Header;
