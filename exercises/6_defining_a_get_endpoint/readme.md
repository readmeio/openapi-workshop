Now, let’s create another route called “/hoot/{id}” as a GET method. Notice the `"``{id}``"` part; that’s called a path parameter. There are many different types of parameters, but in order for the spec to recognize it as a path param, we need to spec it out.

**Instruction: After you spec out the general GET path, add this object within the "parameters" array:**

Here is what the parameter object looks like
```
{
  "in": "path",
  "name": "id",
  "required": true,
  "description": "The id of the hoot you want",
  "schema": {
    "type": "string"
  }
}
```

And this is the general structure of a GET request
```
 "get": {
  "summary": "Get a hoot",
  "tags": [
    "Hoots"
  ],
  "description": "Get a specific hoot",
  "parameters": [
    "{ ADD THE PARAMETER FROM ABOVE HERE }
  ],
  "responses": {
    "404": {
      "description": "hoot not found"
    }
  }
}
```

Here is what the starter template looks like:
```
{
...
            "description": "Successful response"
          }
        }
      }
    },
    "/hoot/{id}": "{ YOUR ANSWER HERE }"
  },
  "servers": [
    {
      "url": "https://hoot.at/api"
    }
  ],
...
}
```