(function () {
  if (!window.location.pathname.includes("/g/")) return;

  const interval = setInterval(() => {
    const anchor = document.querySelector("li > a[href*='/g/']");
    if (!anchor) return;

    // Go 3 divs up from anchor
    let scrollContainer = anchor;
    for (let i = 0; i < 3; i++) {
      if (scrollContainer) scrollContainer = scrollContainer.parentElement.parentElement;
    }

    if (scrollContainer) {
      scrollContainer.style.maxHeight = 'calc(100vh - 180px)';
      scrollContainer.style.overflowY = 'auto';
      scrollContainer.style.paddingRight = '4px';
      clearInterval(interval);
    }
  }, 500);
})();
