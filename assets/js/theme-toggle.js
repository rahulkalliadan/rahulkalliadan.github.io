<script>
(function(){
  function swap(theme){
    var link = document.querySelector('link[rel="stylesheet"][href*="/assets/css/main"]');
    if (!link) return;
    var href = link.getAttribute('href');
    var target = (theme === 'light')
      ? href.replace(/main(-light)?\.css/, 'main-light.css')
      : href.replace(/main(-light)?\.css/, 'main.css');
    if (href !== target) link.setAttribute('href', target);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rk-theme', theme);
    updateIcon(theme);
  }
  function current(){ return document.documentElement.getAttribute('data-theme') || 'dark'; }
  function updateIcon(theme){
    var btn = document.getElementById('rk-theme-btn');
    if (!btn) return;
    btn.innerHTML = (theme === 'light')
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    btn.title = btn.getAttribute('aria-label');
  }

  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.createElement('button');
    btn.id = 'rk-theme-btn';
    btn.className = 'rk-theme-btn';
    btn.type = 'button';
    document.body.appendChild(btn);
    updateIcon(current());
    btn.addEventListener('click', function(){
      swap(current() === 'light' ? 'dark' : 'light');
    });
  });
})();
</script>
