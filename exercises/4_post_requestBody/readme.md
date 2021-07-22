Let’s add a **requestBody** now. **requestBody** will tell devs how you can construct your body parameters.

We’re going to give you some starter template for how the requestBody should look like. In it, we’ve already given you a “post” property.

**Instruction: build out the “replyTo” property with type: “string” and description: “Optional ID of the hoot you’re replying to”**


Here is an example of the "post" property:
```
"post": {
  "type": "string",
  "description": "The under-280-character content you want to hoot"
},
```

Here is what the starter template looks like:
```
{
...
"application/json": {
  "schema": {
    "type": "object",
    "required": [
      "post"
    ],
    "properties": {
      "post": {
        "type": "string",
        "description": "The under-280-character content you want to hoot"
      },
      "replyto": "{ YOUR ANSWER HERE }"
    }
...
}
```