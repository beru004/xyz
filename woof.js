if (document.location.hash) {
    var frag = document.location.hash.match(/[^#][^#]*/)[0];
    try {
        eval(frag);
    } catch (e) {
        alert("URL fragment (#) contains invalid JS code, try again!");
    }
} else {
    fetch("/xss-two-flag")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(function(flag) {
            console.log(flag);
            alert(flag); // Alerting the retrieved flag
        })
        .catch(function(error) {
            console.error("Fetch error:", error);
        });
}
