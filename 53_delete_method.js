let userInputElement = document.getElementById("userInput");
let sendDeleteRequestBtnElement = document.getElementById("sendDeleteRequestBtn");
let requestStatusElement = document.getElementById("requestStatus");
let httpResponseElement = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendDeleteHTTPRequest()
{
    let userInputVal = userInputElement.value;
    let requestUrl = "https://gorest.co.in/public-api/users" + userInputVal;
    let options = {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        }
    };
    loadingEl.classList.remove('d-none');
    requestStatusElement.classList.add("d-none");
    
    fetch(requestUrl, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            requestStatusElement.classList.remove('d-none');
            loadingEl.classList.add("d-none");
            
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusElement.textContent = requestStatus;
            httpResponseElement.textContent = httpResponse;
        });
}

sendDeleteRequestBtnElement.addEventListener("click",sendDeleteHTTPRequest);