# JSON Parser Challenge!

## Complete the challenges in `src/main.js`. To check your answers, open the `index.html` file in this directory in your browser.
Some of the tests will be highlighted blue. This means they are pending and the tests cases will not run. To enable them, go into the `test/test.js` file and find that test case. There will be an `xit` instead of an `it`. Delete the x in front and re-run the tests.

## What is JSON?

Often data is stored on the server in a different format from what is readable by the client side. [JSON](http://www.w3schools.com/js/js_json.asp), or JavaScript Object Notation, is a standard format for passing data between various components of the web. The following is an example of a JSON object:
```
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
```
A JSON Parser is used to transform the data from the readable JSON format (which is a string) into a structure JavaScript object.

Your task is to create this parser that will take a string in JSON format and return a JavaScript object in the appropriate key/value format.
