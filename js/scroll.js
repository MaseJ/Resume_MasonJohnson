// Create list of nav and add on click to them
var links = document.querySelectorAll(".scroll-to");
links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        var elm = document.getElementById(item.getAttribute("data-link"));
        elm.scrollIntoView({
            behavior: 'smooth',
            block: "center"
        });
    });
});

  