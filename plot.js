const past = [
    { timestamp: 1, value: 10 },
    { timestamp: 2, value: 15 },
    { timestamp: 3, value: 7 },
    { timestamp: 4, value: 12 },
    { timestamp: 5, value: 20 },
    { timestamp: 6, value: 16 }
];

// Plot the past data
const plotCanvas = document.getElementById('plotCanvas');
const plotCtx = plotCanvas.getContext('2d');

// Ensure the canvas is properly sized
const width = plotCanvas.width = 400;
const height = plotCanvas.height = 400;
const padding = 0;

// Find max and min values for scaling (y-axis)
const maxY = Math.max(...past.map(d => d.value)); // Find max y value
const minY = Math.min(...past.map(d => d.value)); // Find min y value
const maxX = Math.max(...past.map(d => d.timestamp)); // Max x (timestamp)
const minX = Math.min(...past.map(d => d.timestamp)); // Min x (timestamp)

console.log(`Y-axis range: ${minY} to ${maxY}`); // Check y-axis range
console.log(`X-axis range: ${minX} to ${maxX}`); // Check x-axis range

// Scale the data to fit the canvas height and width
function scaleX(value) {
    return padding + ((value - minX) / (maxX - minX)) * (width - 2 * padding);
}

function scaleY(value) {
    // Map y values so that minY is at the bottom and maxY is at the top
    return height - padding - ((value - minY) / (maxY - minY)) * (height - 2 * padding);
}

// Clear the canvas before drawing
plotCtx.clearRect(0, 0, width, height);

// Draw the y-axis and x-axis
plotCtx.beginPath();
plotCtx.moveTo(padding, padding);
// plotCtx.lineTo(padding, height - padding); // Y-axis
// plotCtx.lineTo(width - padding, height - padding); // X-axis
plotCtx.strokeStyle = '#000';
plotCtx.lineWidth = 2;
plotCtx.stroke();

// Plot the past data points as a line
plotCtx.beginPath();
plotCtx.moveTo(scaleX(past[0].timestamp), scaleY(past[0].value));

past.forEach((point) => {
    plotCtx.lineTo(scaleX(point.timestamp), scaleY(point.value));
});

plotCtx.strokeStyle = '#00f';
plotCtx.lineWidth = 2;
plotCtx.stroke();

console.log('Data plotted successfully');
