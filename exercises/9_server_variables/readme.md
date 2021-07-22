**Server Variables** are a way to dynamically generate a server URL based on a set of parameters.

For example if you had an API called https://hoot.at/api, you can dynamically chunk a piece of the path, say "api" as a `{basePath}` and change it to anything that you want! So you can change it to, let's say, "application_programming_interface". The resulting full URL will now be https://hoot.at/application_programming_interface (😬) and a developer might be able to call something like https://hoot.at/application_programming_interface/hoot

### 👨‍🏫 Instructions

Create a server variable called "basePath" that has a default value of "api" and refer back to it in `servers[0].url`.

> Side note: we wrote a blog about this topic a while back https://blog.readme.com/basic-oas-server-variables-support/

Here is what the starter template looks like:

```
{
...
  },
  "servers": [
    "{ YOUR ANSWER HERE }"
  ],
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
...
}
```
