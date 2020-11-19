


document.addEventListener("DOMContentLoaded", bindButton);
function bindButton() {
    // Listener for the button click
    document.getElementById("generateButton").addEventListener("click", function (event) {

        // creates the request
        const req = new XMLHttpRequest();
        //const saying = document.getElementById("saying").value; // city info from form
        let payload = "http://api.icndb.com/jokes/random";

        // is the GET request URLs
        //if (typeof document !== 'undefined') {
        //    payload = ;
        //}

        //Opening request, async must be marked as true
        req.open("GET", payload, true);

        //Once request is loaded, execute the following function
        req.addEventListener("load", function () {

            //if there were no errors, then get response
            if (req.status >= 200 && req.status < 400) {
                const response = JSON.parse(req.responseText);
                document.getElementById("chuckNorrisSaying").textContent = response.value;

                //Display error code if status code is outside of the 200 - 399 range
            } else {
                console.log("Error Code: " + req.statusText);
            }
        });
        // send request and event.preventDefault
        req.send();
        event.preventDefault();
    });
}