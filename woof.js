if (document.location.hash) {
    var frag = document.location.hash.match(/[^#][^#]*/)[0];
    try {
        eval(frag);
    } catch (e) {
        alert("URL fragment (#) contains invalid JS code, try again!");
    }
} else {
    // Create a new image element
    var img = document.createElement('img');

    // Set the src attribute to the URL of the endpoint that serves the flag
    img.src = '/xss-two-flag'; // Replace '/xss-two-flag' with the actual URL

    // Define onload event handler
    img.onload = function() {
        alert(this.alt); // Alerting the retrieved flag
    };

    // Set the alt attribute to contain the flag (assuming it's returned as text)
    img.alt = 'CTF flag will appear here';

    // Append the image element to the body of the document
    document.body.appendChild(img);
}
