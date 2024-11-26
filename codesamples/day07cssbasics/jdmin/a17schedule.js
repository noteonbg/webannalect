// setInterval example: Production line starts every 5 seconds
let productionLineInterval = setInterval(() => {
    console.log('Production line running... New batch being created.');
}, 5000);

// setTimeout example: After finishing a batch, wait 3 seconds before starting a new one
setTimeout(() => {
    console.log('Batch finished! Starting new batch after 3 seconds delay.');
}, 3000);

// setImmediate example: Perform urgent maintenance task after the current event cycle
setImmediate(() => {
    console.log('Urgent maintenance task being handled immediately after current operation.');
});

// Optional: To stop the production line after some time
setTimeout(() => {
    clearInterval(productionLineInterval);
    console.log('Production line stopped.');
}, 20000);  // Stops the production line after 20 seconds
