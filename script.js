const nav = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');
const links = Array.from(document.querySelectorAll('.site-nav a'));

toggle.addEventListener('click', ()=>{
  nav.classList.toggle('show');
});

links.forEach(l=> l.addEventListener('click', ()=>{
  nav.classList.remove('show');
}));

// Active nav link on scroll
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY + 120;
  sections.forEach(sec=>{
    const top = sec.offsetTop;
    const h = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.site-nav a[href="#${id}"]`);
    if(!link) return;
    if(y >= top && y < top + h){
      link.style.color = '#fff';
    } else {
      link.style.color = '';
    }
  });
});
