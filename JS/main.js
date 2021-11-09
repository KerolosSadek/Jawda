//Start Slider JS Code

const slideArray = [];
for (let i = 0; i < document.querySelectorAll('.slider div').length; i++) {
    slideArray.push(document.querySelectorAll('.slider div')[i].dataset.background);
}

let currentSlideIndex = -1;

function advanceSliderItem() {
    currentSlideIndex++;

    if (currentSlideIndex >= slideArray.length) {
        currentSlideIndex = 0;
    }

    document.querySelector('.slider').style.cssText = 'background: url("' + slideArray[currentSlideIndex] + '") no-repeat center center; background-size: cover;';

    const elems = document.getElementsByClassName('caption');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.cssText = 'opacity: 0;';
    }

    const currentCaption = document.querySelector('.caption-' + (currentSlideIndex));
    currentCaption.style.cssText = 'opacity: 1;';
}

let intervalID = setInterval(advanceSliderItem, 3000);

//End Slider JS Code
/* ************************************************************** */
//Start Tabs Js Code
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// End Tabs Js Code
/* ************************************************************** */