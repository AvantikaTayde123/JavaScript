// A simple function that returns a Promise with a delay
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Completed after ${ms} milliseconds`);
        }, ms);
    });
};

// Async function to use await with the Promise
const asyncFunction = async () => {
    console.log("Before delay");

    // Use await to wait for the Promise to resolve
    const result = await delay(2000);  // Waits for 2 seconds

    console.log(result);  // Logs: "Completed after 2000 milliseconds"
    console.log("After delay");
};
asyncFunction();
