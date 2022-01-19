//Author: Joseph Latina

//Using API to retrieve data
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=3uQScKsHwfr0QjIygHMPvKmezxvJeZPfSigAajem", function(data) {

    var img = data.hdurl;
    var title = data.title;
    var date = data.date;
    var description = data.explanation;

    $(".apod").attr("src", img);
    $(".description").append(description);
    $(".date").append(date);
    $(".title").append(title);
})

//Initialize Elements
const button = document.querySelector('#landing-button');
const likebtn = document.querySelector('.like-btn');
const heart = document.querySelector('.heart');
const text = document.querySelector('.text');

button.classList.add('animate__animated', 'animate__fadeInUp', 'animate-delay');

likebtn.addEventListener('click', e => {
    likebtn.classList.toggle("heart-active");
    heart.classList.toggle("heart-active");
    text.classList.toggle("heart-active");
    console.log(heart);
})




