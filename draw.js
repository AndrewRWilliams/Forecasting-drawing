const drawingCanvas = document.getElementById('drawingCanvas');
const drawingCtx = drawingCanvas.getContext('2d');
let drawing = false;
let drawData = []; // Array to store drawing coordinates

drawingCanvas.addEventListener('mousedown', startDrawing);
drawingCanvas.addEventListener('mousemove', draw);
drawingCanvas.addEventListener('mouseup', stopDrawing);
drawingCanvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
    drawing = true;
    drawingCtx.beginPath();
    const { x, y } = getMousePos(e, drawingCanvas);
    drawingCtx.moveTo(x, y);
    drawData.push({ x, y, drawing: true });
}

function draw(e) {
    if (!drawing) return;
    const { x, y } = getMousePos(e, drawingCanvas);
    drawingCtx.lineTo(x, y);
    drawingCtx.strokeStyle = '#000';
    drawingCtx.lineWidth = 2;
    drawingCtx.stroke();
    drawData.push({ x, y, drawing: true });
}

function stopDrawing() {
    drawing = false;
    drawingCtx.closePath();
    drawData.push({ drawing: false });
    console.log(drawData);
}

function getMousePos(e, canvas) {
    return {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    };
}
