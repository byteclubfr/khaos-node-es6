# khaos-node-es6

A Khaos template to start a Node project using ES6 (EcmaScript 2015) syntax.

## Installation

Save the template locally with:

    $ khaos install lmtm/khaos-node-es6 node-es6

## Usage

Create a new Node ES6 project with:

    $ khaos create node-es6 my-project

Start working

    $ cd my-project
    $ npm install
    $ npm test

## Workflow

Just work in `src` folder using all ES6 features you want.

* `npm publish` will publish an ES5 module so your users don't have to worry about it
* `npm test` supporting ES6 will allow you to test your `src` files without build step

## Structure

* `index.js` is the ES5 main entry point
* `src` is the development folder
* `lib` is a mirror of `src`, compiled to ES5
  * `.gitignore` to ignore all dynamically generated files
  * `.npmignore` to **not** ignore lib folder on npm publish
* `test`
  * `mocha.opts` makes mocha work nicely with ES6

### Git versionning

If you want to keep track of your `lib` folder in your repository, don't forget to

    $ git add -f lib/.gitignore lib/.npmignore

## License

The MIT License

Copyright &copy; 2014, Segment.io &lt;friends@segment.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
