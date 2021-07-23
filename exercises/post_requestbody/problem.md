Let's add a **requestBody** now. **requestBody** will tell developers how you can construct payloads for things like a `POST` or `PUT` API request.

We're going to give you a starter template for what the requestBody should look like. In it, we've already given you a "post" property.

### 👩‍🏫 Instructions

Build out the "replyto" property with a "string" type and "Optional ID of the hoot you’re replying to" description.

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
