if (document.location.hash) {
var frag = document.location.hash.match(/[^#][^#]*/)[0];
try {
    eval(frag);
} catch (e) {
    alert("URL fragment (#) contains invalid JS code, try again!");
}
} else {
var xhr = new XMLHttpRequest();
xhr.open("GET", "/xss-two-flag", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var flag = xhr.responseText;
        console.log(flag);
        alert(flag); // Alerting the retrieved flag
    }
};
xhr.send(); // Sending the XMLHttpRequest
}
