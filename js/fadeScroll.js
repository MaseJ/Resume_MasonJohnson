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
    element.classList.add('scrolled');
    
};

var hideScrollElement = (element) => {
    element.classList.remove('scrolled');
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

// Using throttle to limit the times function is called
// help performance

var throttleTimer = false;

var throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout(() => {
        callback();
        throttleTimer = false;
      }, time);
}

window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250);
})