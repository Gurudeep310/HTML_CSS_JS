let movieReviewsContainerElement = document.getElementById("movieReviewsContainer");
let movieMainTitle = document.createElement('h1');
movieMainTitle.textContent = "Movie Reviews";
movieMainTitle.classList.add('main-title')  ;
movieReviewsContainerElement.appendChild(movieMainTitle);

let movieTitleElement = document.createElement('p');
movieTitleElement.textContent = "Movie Title";
movieTitleElement.classList.add('movie-title');
movieReviewsContainerElement.appendChild(movieTitleElement);

let inputElement = document.createElement('input');
inputElement.type = "text";
inputElement.id = "titleInput";
inputElement.placeholder = "Enter a movie title";
movieReviewsContainerElement.appendChild(inputElement);

let reviewElement = document.createElement('p');
reviewElement.textContent = "Your Review";
reviewElement.classList.add('review');
movieReviewsContainerElement.appendChild(reviewElement);

let textAreaElement = document.createElement('textarea');
textAreaElement.rows = "5";
textAreaElement.columns = "10";
textAreaElement.id = "reviewTextarea";
textAreaElement.placeholder = "Enter your review";
movieReviewsContainerElement.appendChild(textAreaElement);

let buttonContainerElement = document.createElement("div");
buttonContainerElement.setAttribute("class",'d-flex flex-row justify-content-center');
let buttonElement = document.createElement('button');
buttonElement.id = "addBtn";
buttonElement.setAttribute("class","btn btn-primary");
buttonElement.textContent = "Add";
buttonContainerElement.appendChild(buttonElement);
movieReviewsContainerElement.appendChild(buttonContainerElement);

let reviewsContainerElement = document.createElement("div");
reviewsContainerElement.id = "reviewsContainer";
movieReviewsContainerElement.appendChild(reviewsContainerElement);

function check()
{
    let userInputElement = document.getElementById('titleInput');
    let movieTitle = userInputElement.value;
    let movieReview = textAreaElement.value;
    if(movieTitle === "")
    {
        alert("Enter the movie title");
        return;
    }
    else{
        let movieTitleEl = document.createElement("h1");
        movieTitleEl.textContent = "Movie Title" + movieTitle;
        movieTitleEl.classList.add("movie-title");
        let container = document.getElementById("reviewsContainer");
        container.appendChild(movieTitleEl);
        let movieReviewEl = document.createElement('p');
        movieReviewEl.textContent = "Review: "+movieReview;
        container.appendChild(movieReviewEl);
        let horizontalLineEl = document.createElement("hr");
        container.appendChild(horizontalLineEl);
    }
    inputElement.value = "";
    textAreaElement.value = "";
}
let add = document.getElementById('addBtn');
add.onclick = function(){
    check();
}