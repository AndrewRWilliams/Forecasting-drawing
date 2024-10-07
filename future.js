// Future time array (data to plot after the submit button is pressed)
const future = [
    { timestamp: 7, value: 18 },
    { timestamp: 8, value: 22 },
    { timestamp: 9, value: 19 },
    { timestamp: 10, value: 25 }
];

// Get the submit button
const submitBtn = document.getElementById('submitBtn');

// Function to clear the canvas
function clearDrawingCanvas() {
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    console.log('Canvas cleared');
}

// Function to animate the future data being drawn from left to right
function animateFutureData() {
    const padding = 0;
    const height = drawingCanvas.height;
    const width = drawingCanvas.width;

    // Find max and min values for scaling
    const maxY = Math.max(...future.map(d => d.value));
    const minY = Math.min(...future.map(d => d.value));
    const maxX = Math.max(...future.map(d => d.timestamp));
    const minX = Math.min(...future.map(d => d.timestamp));

    // Scale the data to fit the canvas
    function scaleX(value) {
        return padding + ((value - minX) / (maxX - minX)) * (width - 2 * padding);
    }

    function scaleY(value) {
        return height - padding - ((value - minY) / (maxY - minY)) * (height - 2 * padding);
    }

    // Animation variables
    let currentPoint = 0; // Track the current point to be drawn

    // Animation function to draw the line progressively
    function draw() {
        // Clear the canvas before each frame
        clearDrawingCanvas();

        // Draw the future line up to the current point
        drawingCtx.beginPath();
        drawingCtx.moveTo(scaleX(future[0].timestamp), scaleY(future[0].value));

        for (let i = 1; i <= currentPoint; i++) {
            drawingCtx.lineTo(scaleX(future[i].timestamp), scaleY(future[i].value));
        }

        drawingCtx.strokeStyle = '#f00'; // Blue for the future data
        drawingCtx.lineWidth = 2;
        drawingCtx.stroke();

        // Move to the next point if possible, with a delay between frames
        if (currentPoint < future.length - 1) {
            currentPoint++;
            setTimeout(() => {
                requestAnimationFrame(draw); // Call the next frame with a delay
            }, 1200 / future.length); // Delay of 2000ms divided by the number of points
        }
    }

    // Start the animation
    draw();
}

// Submit button functionality: clears drawing and animates future data
submitBtn.addEventListener('click', function () {
    console.log('Submit button pressed!'); // Check if button works
    // Clear the drawing canvas
    clearDrawingCanvas();

    // Animate the future data being drawn
    animateFutureData();
});
