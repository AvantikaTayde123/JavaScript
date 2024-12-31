// A simple delay function that returns a Promise after a given time
const delay = (ms, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);  // Resolves with the message after the delay
        }, ms);
    });
};

// Task 1: Wait for 2 seconds
// Task 2: Wait for 3 seconds
// Task 3: Wait for 1 second

delay(2000, "Task 1: Completed after 2 seconds")  // First task with 2 seconds delay
    .then((result) => {
        console.log(result);  // Logs: "Task 1: Completed after 2 seconds"
        return delay(3000, "Task 2: Completed after 3 seconds");  // Second task with 3 seconds delay
    })
    .then((result) => {
        console.log(result);  // Logs: "Task 2: Completed after 3 seconds"
        return delay(1000, "Task 3: Completed after 1 second");  // Third task with 1 second delay
    })
    .then((result) => {
        console.log(result);  // Logs: "Task 3: Completed after 1 second"
        console.log("All tasks are complete!");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
