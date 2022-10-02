let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerElement = document.getElementById("bgContainer")
function changeColor()
{
    let updatedBgColor = ""
    let randomNumber = Math.ceil(Math.random()*10);
    if (randomNumber < 8)
    {
        updatedBgColor = bgColorsArray[randomNumber]
    }
    bgContainerElement.style.backgroundColor = updatedBgColor
}