
// Change navbar color on scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navLinks = this.document.querySelectorAll(".navbar-nav .nav-link");
    var navbarHeight = navbar.offsetHeight;

    if (window.pageYOffset >= navbarHeight) {
        navbar.classList.add("custom-navbar-bg");
        navbarToggler.classList.add("custom-toggler-styles");

        navLinks.forEach(function (navLink) {
            navLink.classList.add("custom-navlink-color");
        });
    } else {
        navbar.classList.remove("custom-navbar-bg");
        navbarToggler.classList.remove("custom-toggler-styles");

        navLinks.forEach(function (navLink) {
            navLink.classList.remove("custom-navlink-color");
        });
    }
});



var aText = new Array(
    "In August 2023, a group of visionary students sparked an idea - to ",
    "unite individuals of African heritage and those with a profound fascination for African history. ",
    "As captivating conversations unfolded around the call of Alk&egrave;bulan, a shared commitment to African unity emerged 🌍✨.",

    "<br>Join us on a journey of enlightenment, connection, and even a touch of humor as we delve into the intriguing Alkebulan narrative. ",
    "Our club draws us nearer to our roots, fostering a deeper understanding of our shared heritage"

);

var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
var iTextPos = 0; // initialize text position
var sContents = ''; // initialize contents variable
var iRow; // initialize current row
var animationFrameId;

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to start the typewriter animation when the element is in the viewport
function startTypewriterIfInView() {
    var destination = document.getElementById("typedtext");
    if (isInViewport(destination)) {
        animationFrameId = requestAnimationFrame(typewriter);
    }
}

var start;

// Function for the typewriter animation
function typewriter(timestamp) {
    if (!iRow) iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    if (!start) {
        start = timestamp;
    }

    var elapsed = timestamp - start;

    if (iRow < aText.length) {
        if (elapsed >= iSpeed) {
            sContents += aText[iRow].charAt(iTextPos);
            destination.innerHTML = sContents + ".";
            iTextPos++;
            start = timestamp;

            if (iTextPos == iArrLength) {
                iTextPos = 0;
                iRow++;
                if (iRow < aText.length) {
                    iArrLength = aText[iRow].length;
                }
            }
        }
        animationFrameId = requestAnimationFrame(typewriter);
    }
}


// Listen for scroll events and start the animation when the section is in view
window.addEventListener("scroll", startTypewriterIfInView);

// Call startTypewriterIfInView initially to check if the section is already in view
startTypewriterIfInView();




// script.js
window.addEventListener("scroll", () => {
    const image = document.querySelector("img");
    const textContent = document.querySelector(".text-content");

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const imageOffset = image.offsetTop;
    const textContentOffset = textContent.offsetTop;

    if (scrollPosition + windowHeight > imageOffset) {
        image.style.animation = "slide-in 2s forwards";
    }

    if (scrollPosition + windowHeight > textContentOffset) {
        textContent.style.animation = "slide-up 2s forwards";
    }
});



