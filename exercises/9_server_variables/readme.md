**Server Variables** are a way to dynamically generate a server URL based on a set of parameters. So if you had an api called “https://hoot.at/api”, you can dynamically chunk a piece of the path, say “api” as a `{basePath}` and change it to anything that you want! So you can change it to, let’s say, “application_programming_interface”. So the full URL will be “https://hoot.at/application_programming_interface” 😬 and a dev might be able to call something  like “https://hoot.at/application_programming_interface/hoot”

**Instruction: create a server variable called “basePath” that has a default value of “api” and refer back to it in servers[0].url.**

Side note: We wrote a blog about this topic a while back https://blog.readme.com/basic-oas-server-variables-support/

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