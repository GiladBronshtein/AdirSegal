var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// On load default image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //Get all slides in our gallery
    var slides = document.getElementsByClassName("mySlides1")

    //Get the "thumbnail" pictures (Bottom smaller pics)
    var dots = document.getElementsByClassName("demo1");

    // THIS IFs used in order to NOT GET OUT OF PICs >>RANGE<<
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    //Inactive all other pictures
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Put the relevant image within the gallery border
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //sets the image to appear with display setting - block
    slides[slideIndex - 1].style.display = "block";

    //The bottom images, which of them should be active (in focus)
    dots[slideIndex - 1].className += " active";

    //Each image title / text presented respectivly
    document.getElementById("caption1").innerHTML = dots[slideIndex - 1].alt;
}