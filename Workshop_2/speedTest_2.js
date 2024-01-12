let startTime, endTime;
let singleLine = document.getElementById("singleLine");
let info = document.getElementById("info");

let totalMbSpeed = 0;
let numTests = 1;
let testCompleted = 0;

// Function to calculate speed
function calculateSpeed() {
    // Time taken in seconds
    let timeDuration = (endTime - startTime) / 1000;

    // Simulated speed data (replace this with your actual speed measurement logic)
    let simulatedSpeedInMbps = Math.random() * 10;

    totalMbSpeed += simulatedSpeedInMbps;

    testCompleted++;

    // If all tests completed (we get 5 tests then calculate average)
    if (testCompleted === numTests) {
        let averageSpeedInMbps = (totalMbSpeed / numTests).toFixed(2);

        info.innerHTML = "";        // Display average speed in singleLine
        singleLine.innerHTML = `Average Speed: ${averageSpeedInMbps} Mbps` + " Test completed!";
    } else {
        // Run the next test after a simulated delay (replace this with actual logic)
        setTimeout(init, 1000);
    }
}

// Initial function to start tests
const init = () => {
    info.innerHTML = "Testing...";
    startTime = new Date().getTime();
    // Simulate fetching and loading an image (replace this with actual logic)
    setTimeout(() => {
        endTime = new Date().getTime();
        calculateSpeed();
    }, 2000);
};

// Run tests when window loads
window.onload = () => {
    for (let i = 0; i < numTests; i++) {
        init();
    }
};
