/* Tech Banara — shared site script */
(function () {
  // Header background on scroll
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Close mobile menu after tapping a link
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { document.getElementById('nav-toggle').checked = false; });
  });

  // Cursor spotlight on service cards
  document.querySelectorAll('.svc').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // Count-up numbers when they come into view
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    var target = parseFloat(el.dataset.target || el.dataset.count);
    var dec = parseInt(el.dataset.decimals || '0', 10);
    var suffix = el.dataset.suffix || '';
    var start = null, dur = 1600;
    function tick(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); io.unobserve(en.target); } });
    }, { threshold: .6 });
    document.querySelectorAll('[data-count]').forEach(function (el) { io.observe(el); });
  }

  // Contact form (connect to Formspree or your backend to receive messages)
  var form = document.getElementById('quote-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-status').hidden = false;
    form.reset();
  });

  // Keep the rotating headline words on one line: shrink them if the longest word is too wide
  var rot = document.querySelector('.rotator');
  function fitRotator() {
    if (!rot) return;
    rot.style.fontSize = '';
    var widest = 0;
    var range = document.createRange();
    rot.querySelectorAll('.rotator-list span').forEach(function (s) {
      range.selectNodeContents(s);
      widest = Math.max(widest, range.getBoundingClientRect().width);
    });
    var room = rot.parentElement.clientWidth;
    if (widest > room) {
      var size = parseFloat(getComputedStyle(rot).fontSize);
      rot.style.fontSize = Math.floor(size * room / widest * 0.98) + 'px';
    }
  }
  fitRotator();
  if (document.fonts) {
    document.fonts.ready.then(fitRotator);
    document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', fitRotator);
  }
  window.addEventListener('load', fitRotator);
  window.addEventListener('resize', fitRotator);

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
