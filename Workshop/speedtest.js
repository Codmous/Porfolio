function updateSpeedTestResults(result) {
  const speedTestContainer = document.getElementById('speedTest');

  // Check if the speed test result is available
  if (result) {
    const downloadSpeed = result.download.bandwidth;
    const uploadSpeed = result.upload.bandwidth;

    // Update the content of the speedTestContainer
    speedTestContainer.innerHTML = `
      <p><strong>Download Speed:</strong> ${downloadSpeed.toFixed(2)} Mbps</p>
      <p><strong>Upload Speed:</strong> ${uploadSpeed.toFixed(2)} Mbps</p>
    `;
  } else {
    speedTestContainer.innerHTML = '<p>Speed test failed. Please try again.</p>';
  }
}

function runSpeedTest() {
  // Run the speed test and update the results
  speedTest().then(updateSpeedTestResults).catch(() => updateSpeedTestResults(null));
}
