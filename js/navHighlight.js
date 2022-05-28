var sections = document.querySelectorAll(".highlightNav");
var navElements = document.querySelectorAll("a");
console.log(sections);
window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      
      if(pageYOffset >= sectionTop - sectionHeight - 250){
          current = section.getAttribute('id');
      }
    });

    navElements.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
  });