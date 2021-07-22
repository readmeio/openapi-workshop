Now we’re going to look at the response parameters. It’s to note what kind of responses (200,400,etc.) will be sent back to the user.

**Instruction: Let’s create the response so that we return a 200 for it. Bonus points for a 403 invalid response.**

```
{
...
                    "type": "string",
                    "description": "Optional id of the hoot you're replying to"
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "basicAuth": []
          }
        ],
        "responses": "{ YOUR ANSWER HERE }"
      }
    }
  },
  "servers": [
...
}
```