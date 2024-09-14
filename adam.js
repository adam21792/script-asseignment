function upDate(previewPic) {
    // Step 1: Log to ensure the event is firing
    console.log("Hover event triggered!");

    // Step 2: Log the previewPic details (alt and src)
    console.log("Source: ", previewPic.src);
    console.log("Alt Text: ", previewPic.alt);

    // Step 3: Update the #image div text to the alt of the hovered image
    document.getElementById('image').innerHTML = previewPic.alt;

    // Step 4: Change the background image of #image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // Step 5: Check your work by hovering over images
}


function undo() {
    // Step 1: Reset the background image
    document.getElementById('image').style.backgroundImage = "url('')";

    // Step 2: Reset the text back to the original message
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";

    // Step 3: Check your work
}


document.querySelectorAll('.previewPic').forEach(function(pic) {
    pic.addEventListener('mouseover', function() {
        upDate(pic);
    });
    pic.addEventListener('mouseout', function() {
        undo();
    });
});