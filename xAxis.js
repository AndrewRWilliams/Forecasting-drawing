// Get the x-axis canvas
const xAxisCanvas = document.getElementById('xAxisCanvas');
const xAxisCtx = xAxisCanvas.getContext('2d');

// Draw the x-axis line with an arrow
function drawXAxisArrow() {
    const width = xAxisCanvas.width;
    const height = xAxisCanvas.height; // Make sure height is set correctly
    const arrowSize = 20;
    const padding = 0;
    const leftPadding = 50;

    // Draw the x-axis line (adjust height/2 to keep it centered in the x-axis canvas)
    xAxisCtx.beginPath();
    xAxisCtx.moveTo(leftPadding / 2, height / 2); // Start of the line
    xAxisCtx.lineTo(width - padding - arrowSize, height / 2); // End of the line before the arrow
    xAxisCtx.strokeStyle = '#000';
    xAxisCtx.lineWidth = 2;
    xAxisCtx.stroke();

    // Draw the arrow
    xAxisCtx.beginPath();
    xAxisCtx.moveTo(width - padding - arrowSize, height / 2 - arrowSize / 2); // Left side of arrowhead
    xAxisCtx.lineTo(width - padding, height / 2); // Arrow tip
    xAxisCtx.lineTo(width - padding - arrowSize, height / 2 + arrowSize / 2); // Right side of arrowhead
    xAxisCtx.strokeStyle = '#000';
    xAxisCtx.lineWidth = 2;
    xAxisCtx.stroke();
    xAxisCtx.fillStyle = '#000';
    xAxisCtx.fill(); // Fill the arrow
}

// Call the function to draw the x-axis arrow
drawXAxisArrow();
