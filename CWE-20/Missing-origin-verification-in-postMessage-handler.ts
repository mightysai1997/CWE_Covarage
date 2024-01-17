// Vulnerable code: Missing origin verification
window.addEventListener('message', function(event) {
    // Handle the message without verifying the origin
    let data = event.data;
    
    // Process the data received through postMessage
    // (e.g., assuming it's safe without verifying the origin)
    processData(data);
});
