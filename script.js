// Select all images with the class "preview"
let previewPics = document.querySelectorAll('.preview');

// Set up the upDate function
function upDate(event) {
    // Log the alt text and source of the image being hovered over
    console.log("Image Alt: " + event.target.alt);
    console.log("Image Source: " + event.target.src);

    // Change the text of the div with the id 'image'
    document.getElementById('image').innerHTML = event.target.alt;

    // Change the background image of the div with the id 'image'
    document.getElementById('image').style.backgroundImage = `url('${event.target.src}')`;
}

// Add event listeners to each image
previewPics.forEach(pic => {
    pic.addEventListener('mouseover', upDate);
});

// Store the original state
const originalText = "Hover over an image below to display here.";
const originalBackground = "url('')";

// Define the undo function
function undo() {
    // Reset the background image and text of the 'image' div
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = originalBackground;
    imageDiv.innerHTML = originalText;
}

// Select all images with the class "preview"
let previewPics = document.querySelectorAll('.preview');

// Store the original state
const originalText = "Hover over an image below to display here.";
const originalBackground = "url('')";

// Define the upDate function
function upDate(event) {
    // Log the alt text and source of the image being hovered over
    console.log("Image Alt: " + event.target.alt);
    console.log("Image Source: " + event.target.src);

    // Change the text of the div with the id 'image'
    document.getElementById('image').innerHTML = event.target.alt;

    // Change the background image of the div with the id 'image'
    document.getElementById('image').style.backgroundImage = `url('${event.target.src}')`;
}

// Add event listeners to each image
previewPics.forEach(pic => {
    pic.addEventListener('mouseover', upDate);
});

// Define the undo function
function undo() {
    // Reset the background image and text of the 'image' div
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = originalBackground;
    imageDiv.innerHTML = originalText;
}

