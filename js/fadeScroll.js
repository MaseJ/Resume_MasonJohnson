var scrollOffset = 100;

var scrollElements = document.querySelectorAll(".scroll-js");

scrollElements.forEach((el) => {
    el.style.opacity = 0;
})

var elementInView = (el, offset = 0) => {
    var elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

var displayScrollElement = (element) => {
    element.style.opacity = 1;
};

var hideScrollElement = (element) => {
    element.style.opacity = 0;
}

var handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if(elementInView(el, 100)){
            displayScrollElement(el);
            
        } else {
            hideScrollElement(el);
            
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})