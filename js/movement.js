// Elements that grab container and card
var card = document.querySelectorAll(".card");
var container = document.querySelector(".container");

// Text element to make it pop
var text = document.querySelectorAll(".about-text");

// Movement animation
container.addEventListener("mousemove", (e) => {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

// Reset animation when mouse leaves container
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    text.style.transform = 'translateZ(0px)';
});

// Animation when mouse enters
container.addEventListener('mouseenter', e => {
    card.style.tranistion = 'none';
    text.style.transform = 'translateZ(50px)';
})