Now we’re going to define a **POST** endpoint. In “paths” , add a key called `"/hoot"` and add this object


```
{
  "post": {
    "summary": "Create a hoot",
    "description": "Post a new hoot to the site",
    "tags": [
    ],
    "requestBody": {
    },
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