Let’s add a **requestBody** now. **requestBody** will tell devs how you can construct your body parameters.

We’re going to give you some starter template for how the requestBody should look like. In it, we’ve already given you a “post” property.

**Instruction: build out the “replyTo” property with type: “string” and description: “Optional ID of the hoot you’re replying to”**

```
"/hoot": {
  "post": {
    "summary": "Create a hoot",
    "description": "Post a new hoot to the site",
    "tags": [
      "Hoots"
    ],
    "requestBody": "{ YOUR ANSWER HERE }",
    "security": [
      {
        "basicAuth": []
      }
    ],
    "responses": {
    }
  }
}
```