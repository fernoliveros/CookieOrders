# Cookie Orders

This is app keeps track of cookie orders and you can use the terminal command line as an interface

# Prerequisites

This project requires [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Recommended versions displayed below are the versions I have installed.

```sh
$ node -v && npm -v
v18.16.1
9.5.1
```

# Running & Interfacing with the App

Run the app with `node` command. This will run the `index.js` file in the root directory.

```
$ node .
```

After running the app, you can now interface with it via terminal. There are three commands: `add`, `rm`, and `ls`. After every command, the app will print out some text to give you feedback.

To add an order of cookies, use the `add` command followed by an amount and the type of cookie you would like to order.

```
add 1 Chocolate Chip
```

To remove all orders of a particular variery use the `rm` command followed by the type of cookie you would like to remove.

```
rm Chocolate Chip
```

To list all orders simply use the `ls` command, you can also append the `-i` flag to get an itemized list of orders by type.

```
ls
```

```
ls -i
```

When you're done you can just kill the process (Ctrl+C)

# Running Unit Tests

There is only one dev dependency (Jasmine) needed to be installed used for unit tests. Install and run the test with the command below.

```
$ npm i; npm run test
```
