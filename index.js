const reveal = document.querySelector('.navigation');
const sections = document.querySelectorAll('section[id]');
const cursor = document.querySelector('.fa-fire');
const hiddenElements = document.querySelectorAll('.hidden');
const appear = document.querySelector('#eventimg');
const hiddenimg = document.querySelector('.content');


window.addEventListener('scroll', () => {
    if(window.pageYOffset >700){
        reveal.classList.add('active');
    } else {
        reveal.classList.remove('active');
    }
});


window.addEventListener('scroll', highlight);
function highlight() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.navigation a[href*=' + sectionId + ']').classList.add('recent');
    } else {
      document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove('recent');
    }
  });
}


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


hiddenimg.addEventListener('click', function(){
    if (appear.style.display === 'block') {
      appear.style.display = 'none';
    } else {
      appear.style.display = 'block';
    }
});
