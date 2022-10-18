const reveal = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    if(window.pageYOffset >700){
        reveal.classList.add('active');
    } else {
        reveal.classList.remove('active');
    }
});


const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', highlight);
function highlight() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute('id');
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
){
      document.querySelector('.navigation a[href*=' + sectionId + ']').classList.add('recent');
    } else {
      document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove('recent');
    }
  });
}


const cursor = document.querySelector('.fa-fire');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let button = document.getElementById('top-button');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 780 || document.documentElement.scrollTop > 780) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


const appear = document.querySelector('#eventimg');
const hiddenimg = document.querySelector('.content');

hiddenimg.addEventListener('click', function(){
    if (appear.style.display === 'block') {
      appear.style.display = 'none';
    } else {
      appear.style.display = 'block';
    }
});


