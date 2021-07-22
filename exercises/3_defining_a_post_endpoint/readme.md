Now we’re going to define a **POST** endpoint. In “paths” , add a key called `"/hoot"` and add this object:

```
{
  "post": {
    "summary": "Create a hoot",
    "description": "Post a new hoot to the site",
    "tags": [
    ],
    "security": [
      {
        "basicAuth": []
      }
    ],
    "responses": {
      "200": {
        "description": "Successful response"
      }
    }
  }
}
```


Here is a cutout of what the starter template looks like:
```
{
...
  "info": {
    "version": "1.0",
    "title": "Hoot",
    "license": {
      "name": "ISC"
    }
  },
  "paths": {
    "/hoot": "{ YOUR ANSWER HERE }"
  },
  "servers": [
    {
      "url": "https://hoot.at/api"
    }
  ],
...
}
```