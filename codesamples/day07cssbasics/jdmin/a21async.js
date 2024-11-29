
/*

A Promise can be in one of three states:
Pending: The operation is still in progress.
Resolved (Fulfilled): The operation has completed successfully, and the promise has a value.
Rejected: The operation has failed, and the promise has an error reason.
A Promise allows you to attach callbacks (then, catch) to handle the success or
 failure of an asynchronous operation.

*/

//person X is doing it
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});

//person Y is using it.
myPromise
    .then(result => console.log(result))  // Logs: Operation succeeded!
    .catch(error => console.log(error));  // Logs: Operation failed!






// await and asynch
//convience for using promises

// Function that returns a promise .. aysnch
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
}

// Using async/await
async function processData() {
    console.log("Start fetching data...");
    let data = await fetchData();  // Waits for fetchData() to resolve
    console.log(data);             // Logs: Data fetched!
}

processData();








// Simulating an API request using async/await
async function fetchUserData() {
    try {
        // Using fetch to get data from a fake API
        let response = await fetch('http://someapi.com/uri/1');
        
        // If the response is successful, convert it to JSON
        if (response.ok) {
            let data = await response.json();
            console.log('User data:', data);
        } else {
            console.log('Failed to fetch data. Status:', response.status);
        }
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error occurred:', error);
    }
}

// Calling the async function
fetchUserData();




/*
async function fetchOrderDetails(orderId) {
    // Simulate a delay to fetch data (e.g., from an external database)
    let response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: orderId,
                status: "pending", // Order is still pending production
                product: "Laptop",
                quantity: 5
            });
        }, 1000); // Simulate a 1-second delay
    });

    return response;
}

// Simulate updating the order status in the production system
async function updateProductionStatus(orderId, status) {
    // Simulate updating the status in the system (e.g., database or external service)
    let response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order ${orderId} status updated to: ${status}`);
        }, 500); // Simulate a 0.5-second delay
    });

    return response;
}

// The main async function to manage the order processing
async function processOrder(orderId) {
    try {
        // Step 1: Fetch order details
        console.log(`Fetching details for order ${orderId}...`);
        let orderDetails = await fetchOrderDetails(orderId);
        console.log(`Order Details:`, orderDetails);

        // Step 2: Check the status of the order
        if (orderDetails.status === "pending") {
            console.log("Order is pending. Processing...");
            // Simulate processing and updating status
            let updateMessage = await updateProductionStatus(orderId, "in production");
            console.log(updateMessage);
        } else {
            console.log(`Order ${orderId} has already been processed.`);
        }

        // Step 3: Final status update after production
        console.log(`Finalizing the production for order ${orderId}...`);
        let finalUpdateMessage = await updateProductionStatus(orderId, "completed");
        console.log(finalUpdateMessage);
    } catch (error) {
        console.error("Error during order processing:", error);
    }
}

// Example: Process an order with ID 123
processOrder(123);

*/
