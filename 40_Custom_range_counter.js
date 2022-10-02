let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

function displayNumbers(fromCount, toCount) {
    let currentCount = fromCount;
    counterTextEl.textContent = currentCount;
    let timerId = setInterval(function() {
        if (currrentCount < toCount) {
            currrentCount += 1;
            counterTextEl.textContent = currrentCount;
        } else {
            clearInterval(timerId);
        }
    }, 100);
}

function onClickStart() {
    let fromVal = fromUserInputEl.value;
    let toVal = toUserInputEl.value;
    if (fromVal === "") {
        alert("Enter the from value");
    } else if (toVal === "") {
        alert("Enter the to value");
    } else {
        let fromValInteger = parseInt(fromVal);
        let toValInteger = parseInt(toVal);
        displayNumbers(fromValInteger, toValInteger);
    }
}