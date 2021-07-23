[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.com)

# OpenAPI Workshop

![OpenAPI Workshop](./preview.png)

[![NPM version][npm-image]][npm-url]
[![node][node-image]][node-url]
[![repo][ci-image]][repo-url]

**✨ Learn how to use the OpenAPI Specification the easy way! ✨**

Do you want to create awesome APIs and documentation like [this](https://docs.readme.com/reference/getapispecification) or [this](https://developers.hoot.at/reference/post_hoot)? In this workshop, we'll equip you with the skills to do just that.

We think learning OAS (OpenAPI Specification) is a great way to maintain an API for yourself and your team. OAS can allow you to maintain an API in a logical fashion, and will allow you to use some tooling to easily document your API for consumption. 

But the learning curve is quite high. Usually, someone get's thrown into a complex OAS issue and they'll have to learn about it by fixing a bad bug. Hopefully, this structured series of exercises will help you build up some fundamental knowledge to get you started on your OAS journey. Or equip you with just enough knowledge to be dangerous 😈. 

> **_Textbook definition:_** **OAS** (OpenAPI Specification) is a specification for machine-readable interface files for describing, producing, consuming, and visualizing RESTful web services
>
> — about [OpenAPI] at **Wikipedia**

--------

> **_Definition on the street:_** **OAS** (OpenAPI Specification) is a glorified JSON object that has a bunch of obscure rules that tells you how an API can be used.

## Exercises

This workshopper has easy and clear tasks that cover the most important aspects of OAS.

* **Basic Structure** — Overview of the skeletal structure of OAS
* **POST Endpoints** — Learn how to define a POST endpoint
* **POST requestBody** — Learn about the POST requestBody structure
* **POST response** — Learn about the POST response
* **GET Endpoints** — Learn how to define a GET endpoint
* **$ref** — Learn how to use `$ref` in OAS
* **Server Variables** — Build dynamic URLs for your API with Server Variables
* **anyOf, allOf** — Build complex schemas with `anyOf` and `allOf`


## Requirements

If you are on Windows, make sure you are using at least version 12 of Node.js

* [**Node.js**](node-url) ^12 || ^14 || ^16

## Installation

Open your terminal and run this command:

    npm install -g openapi-workshop

## Usage

Open your terminal and run the following command:

    openapi-workshop


Once you've selected an exercise. We create a directory in which you've run your command called `answers`, which will include the starter templates for you to begin each of the exercises. 

You can verify your work by running the following:

    openapi-workshop verify answers/welcome.json

## Before Starting Out

- You have to have a general understanding of what JSON is. If you need a primer, go [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) to read up more.
- If you see a "{ YOUR ANSWER HERE }", it means that you should remove the string value from the JSON and replace it with an object containing your answer.
- It will be helpful to understand the evaluation criteria. They are a combination of the following:
    - Does it pass our validation? Is your answer a valid OAS spec? (Disclaimer: we may not validate an exercise at times for simplicity sake)
    - Your answers are evaluated on whether some key/value pairs exist within the JSON object. 
    - Sometimes, they are based on equality (does your key/value pair match exactly ours?)
- If you fail, don't fret, you have ∞ number of tries. If you do fail the verification, we will give you some hints so you aren't stuck.

## License

MIT © [ReadMe](https://readme.com)

<!-- References -->

[node-url]: https://nodejs.org/en/
[npm-url]: https://npmjs.org/package/openapi-workshop
[OpenAPI]: https://en.wikipedia.org/wiki/OpenAPI_Specification
[repo-url]: https://github.com/readmeio/openapi-workshop

<!-- Badges -->

[ci-image]: https://img.shields.io/github/workflow/status/readmeio/openapi-workshop/CI?style=flat-square
[node-image]: https://img.shields.io/node/v/openapi-workshop.svg?style=flat-square
[npm-image]: https://img.shields.io/npm/v/openapi-workshop.svg?style=flat-square
