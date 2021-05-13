import styled from "styled-components";

function RouteInput({
  resource,
  setResource,
  nestedResource,
  setNestedResource,
}) {
  return (
    <form>
      <Input
        placeholder="(resource)"
        size="50"
        value={resource}
        onChange={(e) => setResource(e.target.value)}
      />
      <Input
        placeholder="(nested resource)"
        value={nestedResource}
        onChange={(e) => setNestedResource(e.target.value)}
      />
      <p>
        Type in your resource names and <b>click the table below</b> for full
        route info. Alphanumeric characters only!
      </p>
    </form>
  );
}

const Input = styled.input`
  border: solid 0.1em grey;
  height: 2em;
  box-shadow: 0.5px 0.5px 1px #707070;
  margin: 4px;
  font-size: inherit;
`;

export default RouteInput;
