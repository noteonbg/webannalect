console.log("Start of script");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0); // 0 ms delay

setTimeout(() => {
    console.log("setTimeout 2");
}, 2000); // 2 seconds delay

console.log("End of script");

/*

Synchronous Code:

The first console.log("Start of script") executes immediately.
Then, we encounter two setTimeout functions, which are asynchronous.
setTimeout(() => { console.log("setTimeout 1"); }, 0) gets added to the Web APIs
 queue with a 0ms delay.
setTimeout(() => { console.log("setTimeout 2"); }, 2000) is added to the queue
 with a 2-second delay.
The second console.log("End of script") is also executed synchronously, immediately 
after the first one.

Asynchronous Code:

The event loop now steps in:
The synchronous code has finished execution, so it looks at the event queue.
The first setTimeout (with 0ms delay) is added to the queue, but it’s handled after the synchronous code finishes. Even though the delay is 0, it still waits for the call stack to be clear.
The second setTimeout (with 2000ms delay) waits for 2 seconds before being added to the queue.


Event Loop:
After 0ms, the event loop picks up the first callback (setTimeout 1) from the queue
 and runs it.
After 2 seconds, the event loop picks up the second callback 
(setTimeout 2) and executes it.

How the Event Loop Works:
Call Stack: Initially contains the script execution.
Web APIs: When setTimeout is called, it hands over the callback to Web APIs,
 which will trigger them after the specified delay.

Event Queue: After the synchronous code finishes, the event loop pushes the
 callback functions from the event queue to the call stack to execute them.

The callbacks are executed in the order they arrive in the event queue,
 respecting their respective delays.

*/


/*
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End");



*/

/*

Synchronous Execution:

"Start" is logged.

setTimeout with 0ms delay is added to the Web APIs and scheduled to run after the 
synchronous code finishes.

A resolved promise is created, and the .then() callback is added to the
 microtask queue.

 "End" is logged.
Microtasks vs Macrotasks:

After the synchronous code finishes, the event loop checks the microtask queue first (before the macrotask queue).
The Promise.resolve().then() callback is executed before the setTimeout callback, even though both are scheduled for later execution.
Event Loop Process:

The event loop processes the microtask queue (Promise resolved).
After that, the event loop processes the macrotask queue (setTimeout callback).

Event Loop: Responsible for checking the call stack and moving tasks from the event queue to the stack when it’s empty.
Call Stack: Holds synchronous code execution.
Event Queue: Holds asynchronous code (like setTimeout, Promises, etc.) that is waiting to be executed.
Microtasks and Macrotasks: Microtasks (like Promises) are executed before macrotasks (like setTimeout), even if their delay is 0.



*/


