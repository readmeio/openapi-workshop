In a previous exercise, we created the POST path with a schema specified. We’re now going to make that piece reusable. In OAS, you can refer back to schemas using the `$ref` pattern.

**Instruction: Take the object in the Schema (from previous exercises or here https://github.com/readmeio/oas-examples/blob/main/3.0/json/openapi-workshop/get.json#L87-L103) and add it into “components/schemas”**

And here is what the starter template looks like:
```
{
...
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    },
    "schemas": "{ YOUR ANSWER HERE }"
  },
  "x-readme": {
    "explorer-enabled": true
  }
}
```