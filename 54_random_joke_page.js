let jokeTextElement = document.getElementById("jokeText");
let jokeBtnElement = document.getElementById("jokeBtn");
let spinnerElement = document.getElementById("spinner");

function sendHTTPRequest() {
    let requestUrl = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET",
    };
    spinnerElement.classList.remove("d-none");
    jokeTextElement.classList.add("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            jokeTextElement.classList.remove("d-none");
            spinnerElement.classList.add("d-none");
            let joke = jsonData.value;
            jokeTextElement.textContent = joke;
        });
}
jokeBtnElement.addEventListener("click", sendHTTPRequest);