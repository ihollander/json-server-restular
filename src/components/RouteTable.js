import RouteRowGroup from "./RouteRowGroup";
import { singleRoutes, nestedRoutes } from "../definitions";
import styled from "styled-components";

function RouteTable({ resource, nestedResource }) {
  const singularResource = resource.replace(/s$/, "");
  const singularNestedResource = nestedResource.replace(/s$/, "");

  const routes = (nestedResource.length > 0
    ? [...singleRoutes, ...nestedRoutes]
    : singleRoutes
  ).map((route) => {
    const definition = {};
    for (const prop in route) {
      definition[prop] = route[prop]
        .replaceAll("$resource", singularResource)
        .replaceAll("$nested", singularNestedResource);
    }
    return definition;
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>HTTP Request Type</th>
          <th>URL Path</th>
          <th>RESTful Resource Name</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {routes.map((route) => (
          <RouteRowGroup key={route.method + route.endpoint} route={route} />
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  min-width: 40px;
  margin: 32px auto;
  border: 2px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: initial;

  th {
    background: #eee;
  }

  th,
  td {
    padding: 10px;
    border: 2px solid #ccc;
  }
`;

export default RouteTable;
