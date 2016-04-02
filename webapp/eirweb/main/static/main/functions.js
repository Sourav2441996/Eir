/**
 * All sort of functions used by the page.
 */

var lc = null;

function initializeDrawing(backgroundImage) {

    // Destroy the old canvas.
    if (lc != null) {
        lc.teardown();
    }

    var parameters = {
        imageURLPrefix: '/static/main/canvas/lc-images',
        toolbarPosition: 'bottom',
        defaultStrokeWidth: 2,
        strokeWidths: [1, 2, 3, 5, 30]
    };

    if (backgroundImage != null) {
        var im = new Image()
        im.src = backgroundImage;
        parameters['backgroundShapes'] = [
            LC.createShape(
                'Image',
                {x: 0, y: 0, image: im}
            )
        ];

    }

    var lc_container = document.getElementById("lc");
    var new_div = document.createElement('div');
    lc_container.appendChild(new_div)


    lc = LC.init(new_div, parameters);

    // Register event handlers
    var pointerupListener = lc.on('drawingChange', function() {
        // Send new image to server.
        sendInstruction();
    });
}

// Sends the current instruction to the server.
function sendInstruction() {

}