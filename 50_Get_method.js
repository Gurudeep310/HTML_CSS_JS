let loadingEl = document.getElementById("sendGetRequestBtn");
let requestStatusElement = document.getElementById("requestStatus");
let httpResponseElement = document.getElementById("httpResponse");
let sendGetRequestBtnElement = document.getElementById("sendGetRequestBtn");

function sendGetHTTPRequest() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET",
    };
    loadingEl.classList.remove("d-none");
    requestStatusElement.classList.add("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusElement.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusElement.textContent = requestStatus;
            httpResponseElement.textContent = httpResponse;
        });
}

sendGetRequestBtnElement.addEventListener("click", sendGetHTTPRequest);