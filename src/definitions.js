const singleRoutes = [
  {
    method: "GET",
    endpoint: "/$resources",
    resourceName: "index",
    description: "display a list of all $resources",
    fetchExample: `
fetch("http://localhost:4000/$resources")
  .then((r) => r.json())
  .then(($resourcesArray) => console.log($resourcesArray))
`,
  },
  {
    method: "POST",
    endpoint: "/$resources",
    resourceName: "create",
    description: "create a specific $resource",
    fetchExample: `
fetch("http://localhost:4000/$resources", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then((r) => r.json())
  .then(($resourceObj) => console.log($resourceObj))
`,
  },
  {
    method: "GET",
    endpoint: "/$resources/:id",
    resourceName: "show",
    description: "display a specific $resource",
    fetchExample: `
fetch("http://localhost:4000/$resources/1")
  .then((r) => r.json())
  .then(($resourceObj) => console.log($resourceObj))
`,
  },
  {
    method: "PATCH",
    endpoint: "/$resources/:id",
    resourceName: "update",
    description: "update a specific $resource",
    fetchExample: `
fetch("http://localhost:4000/$resources/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then((r) => r.json())
  .then(($resourceObj) => console.log($resourceObj))
`,
  },
  {
    method: "DELETE",
    endpoint: "/$resources/:id",
    resourceName: "destroy",
    description: "delete a specific $resource",
    fetchExample: `
fetch("http://localhost:4000/$resources/1", {
  method: "DELETE",
})
  .then((r) => r.json())
  .then(() => console.log("Deleted"))
`,
  },
];

const nestedRoutes = [
  {
    method: "GET",
    endpoint: "/$resources/:$resource_id/$nesteds",
    resourceName: "index",
    description: "display a list of all $nesteds for a specific $resource",
    fetchExample: `
fetch("http://localhost:4000/$resources/1/$nesteds")
  .then((r) => r.json())
  .then(($nestedsArray) => console.log($nestedsArray))
`,
  },
  {
    method: "POST",
    endpoint: "/$resources/:$resource_id/$nesteds",
    resourceName: "create",
    description: "create a specific $nested for a specific $resource",
    fetchExample: `
fetch("http://localhost:4000/$resources/1/$nesteds", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then((r) => r.json())
  .then(($nestedObj) => console.log($nestedObj))
`,
  },
];

export { singleRoutes, nestedRoutes };
