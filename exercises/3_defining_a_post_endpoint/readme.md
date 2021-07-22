Now we’re going to define a **POST** endpoint. In “paths”, add a key called `"/hoot"` (if you're over the whole owl bit, we sincerely apologize but sadly you'll have to roll with it) and add this object:

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
  "servers": [
    {
      "url": "https://hoot.at/api"
    }
  ],
  "paths": {
    "/hoot": "{ YOUR ANSWER HERE }"
  },
...
}
```
