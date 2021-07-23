[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.com)

# OpenAPI Workshop

![OpenAPI Workshop](./preview.png)

[![NPM version][npm-image]][npm-url]
[![node][node-image]][node-url]
[![repo][ci-image]][repo-url]

**✨ Learn how to use the OpenAPI Specification the easy way! ✨**

We think learning OAS is a great way to maintain an API for yourself and your team. OAS can allow you to maintain an API in a logical fashion, and will allow you to use some tooling to easily document your API for consumption. 

But the learning curve is quite high. Usually, someone get's thrown into a complex OAS issue and they'll have to learn about it by fixing a bad bug. Hopefully, this structured series of exercises will help you build up some fundamental knowledge to get you started on your OAS journey. Or equip you with just enough knowledge to be dangerous 😈. 

> **_Textbook definition:_** **OAS** (OpenAPI Specification) is a specification for machine-readable interface files for describing, producing, consuming, and visualizing RESTful web services
>
> — about [OpenAPI] at **Wikipedia**

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
