/* Open off-site links and document downloads in a new tab.
   Internal page links are left alone on purpose: hijacking them breaks the
   back button and trips WCAG 3.2.5 (change on request). */
(function () {
  var DOC = /\.(pdf|docx?|xlsx?|pptx?|zip|csv)$/i;

  function apply() {
    var here = window.location.hostname;
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#' || /^(mailto|tel):/i.test(href)) continue;

      var url;
      try { url = new URL(a.href, window.location.href); } catch (e) { continue; }
      if (url.protocol !== 'http:' && url.protocol !== 'https:') continue;

      var offsite = url.hostname !== here;
      if (!offsite && !DOC.test(url.pathname)) continue;

      a.target = '_blank';
      a.rel = (a.rel ? a.rel + ' ' : '') + 'noopener noreferrer';

      /* Tell assistive tech a new tab is coming, without changing the visible
         label. Skip buttons and anything already labelled. */
      if (!a.getAttribute('aria-label') && a.textContent.trim()) {
        a.setAttribute('aria-label', a.textContent.trim() + ' (opens in a new tab)');
      }
    }
  }

  apply();
  /* Material swaps page content without a reload, so re-apply per navigation. */
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(apply);
  }
})();
