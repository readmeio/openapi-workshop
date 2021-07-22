Now you may asking yourself, what is **anyOf, allOf?**? And if you weren't asking yourself that, you definitely are now!

“**anyOf” is a way to declare whether a property can be of one thing or another. something like, this response can either look like a “Hoot” or a “Squawk”.** 

**“allOf” is a way to declare that a property must be both a “Hoot” or a “Squawk”**

Why is it important? Well, when you're starting out with simple schemas, you may not really need it. But as you become an OpenAPI expert, it'll come in handy when you need to create complex schemas.

Side note: We at ReadMe added supported anyOf, allOf about a year ago! https://docs.readme.com/changelog/api-explorer-v6-allof-support-better-errors-and-more

** Instruction: Add an "anyOf" to the GET request that we added. "anyOf" will be an array of objects, where you can either specify a "$ref" or a schema-like object.

Here is an example of "anyOf" 

```
"schema": {
  "anyOf": [
    {
      "$ref": "{ YOUR ANSWER HERE }"
    },
    {
      "$ref": "{ YOUR ANSWER HERE }"
    }
  ]
}
```

Here is what the starter template looks like:
```
{
...
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": "{ YOUR ANSWER HERE }"
              }
            }
          },
          "404": {
            "description": "hoot not found"
          }
        },
...
}
```
