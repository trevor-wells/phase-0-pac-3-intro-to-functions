// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

function doSomething(thing) {
    console.log(thing);
}

function add(x, y) {
    return x + y;
}
  
sayHello();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
doSomething("Something");
sayHelloTo("Trevor Wells");
say("Frankly my dear", "I don't give a damn");
console.log(add(9, 10));
