
document.addEventListener('DOMContentLoaded', function(){
  // Add class to body to trigger fade-in
  requestAnimationFrame(()=> document.body.classList.add('page-ready'));

  // intercept internal links to animate fade-out
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      // If it's an external link or anchor, let it go
      if(!href || href.startsWith('http') || href.startsWith('#')) return;
      e.preventDefault();
      document.body.classList.remove('page-ready');
      document.body.classList.add('fade-out');
      setTimeout(()=> { window.location = href; }, 420);
    });
  });
});
