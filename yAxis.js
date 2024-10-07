// Get the y-axis canvas
const yAxisCanvas = document.getElementById('yAxisCanvas');
const yAxisCtx = yAxisCanvas.getContext('2d');

// Draw the y-axis line with an arrow
function drawYAxisArrow() {
    const width = yAxisCanvas.width;
    const height = yAxisCanvas.height;
    const arrowSize = 20;
    const padding = 0;

    // Draw the y-axis line
    yAxisCtx.beginPath();
    yAxisCtx.moveTo(width / 2, height); // Start of the line (bottom at the x-axis)
    yAxisCtx.lineTo(width / 2, padding + arrowSize); // End of the line before the arrow (top)
    yAxisCtx.strokeStyle = '#000';
    yAxisCtx.lineWidth = 2;
    yAxisCtx.stroke();

    // Draw the arrow pointing upwards
    yAxisCtx.beginPath();
    yAxisCtx.moveTo(width / 2 - arrowSize / 2, padding + arrowSize); // Left side of the arrowhead
    yAxisCtx.lineTo(width / 2, padding); // Arrow tip
    yAxisCtx.lineTo(width / 2 + arrowSize / 2, padding + arrowSize); // Right side of the arrowhead
    yAxisCtx.strokeStyle = '#000';
    yAxisCtx.lineWidth = 2;
    yAxisCtx.stroke();
    yAxisCtx.fillStyle = '#000';
    yAxisCtx.fill(); // Fill the arrow
}

// Call the function to draw the y-axis arrow
drawYAxisArrow();
