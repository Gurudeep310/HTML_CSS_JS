let requestBodyElement = document.getElementById("requestBody");
let sendPostRequestBtnElement = document.getElementById("sendPostRequestBtn");
let requestStatusElement = document.getElementById("requestStatus");
let httpResponseElement = document.getElementById("httpResponse");
let loadingElement = document.getElementById("loading");

function sendPostHTTPRequest()
{
    let requestUrl = "https://gorest.co.in/public-api/users";
    let requestBody = requestBodyElement.value;
    let options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: requestBody
    };
    loadingElement.classList.remove("d-none");
    requestStatusElement.classList.add("d-none");
    
    fetch(requestUrl, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            requestStatusElement.classList.remove("d-none");
            loadingElement.classList.add("d-none");
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusElement.textContent = requestStatus;
            httpResponseElement.textContent = httpResponse;
        });
}

sendPostRequestBtnElement.addEventListener("click",sendPostHTTPRequest);