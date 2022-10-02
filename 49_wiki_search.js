let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

// Display each search result in a specific UI  
function createAndAppendSearchResult(result)
{
    /*
        Steps to be done:
        -> Creating Result item 
        -> Creating title element 
        -> Creating break element 
        -> Creating url element 
        -> Creating break element 
        -> Creating description element 
    */
    // Creating Result item
    let resultItemEl = document.createElement('div');
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    
    // Creating title element
    let {link,title,description} = result;              // Accessing title and link from object result 
    let resultTitleEl = document.createElement("a");
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank_";
    resultTitleEl.textContent = title ;
    resultTitleEl.classList.add("result-title");
    resultItemEl.appendChild(resultTitleEl);
    
    // Creating break element 
    let titleBreakEl = document.createElement('br');
    resultItemEl.appendChild(titleBreakEl); 
    
    // Creating url element
    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.target = '_blank_';
    urlEl.textContent = link; 
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);
     
    // Creating break element
    let lineBreakEl = document.createElement('br');
    resultItemEl.appendChild(lineBreakEl);
        
    // Creating description element 
    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
}

// Display results function
function displayResults(searchResults) 
{
    //let result = searchResults[0];      // Accessing each search result 
    spinnerEl.classList.toggle('d-none');
    for(let result of searchResults)
    {
        createAndAppendSearchResult(result);
    }
}

// Adding event listener
function searchWikipedia(event)
{
    if(event.key === "Enter")                                   // Check if user has clicked enter and if pressed enter then 
    {
        spinnerEl.classList.toggle("d-none"); 
        searchResultsEl.textContent = "";
        let searchInputValue = searchInputEl.value;
        //console.log(searchInputValue);
        //Fetching search results
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata)
        {
          //console.log(jsondata);
          // Display Search Results 
          let {search_results} = jsondata;   // Storing an array of data 
          displayResults(search_results);
        })
    }
}
searchInputEl.addEventListener('keydown',searchWikipedia);