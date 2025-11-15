

  // Simple reveal on scroll (IntersectionObserver)
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('show');
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.reveal, .card, .project').forEach(n => obs.observe(n));

  // highlight nav active link manually
  const links = document.querySelectorAll('nav a');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));
  function onScroll(){
    const y = window.scrollY + 120;
    for(let i=sections.length-1;i>=0;i--){
      const s = sections[i];
      if(!s) continue;
      if(s.offsetTop <= y){
        links.forEach(a=>a.classList.remove('active'));
        links[i].classList.add('active');
        break;
      }
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
