// Optional image placeholders are independent of download links.
// Downloads use ordinary same-site links, so the PDF does not depend on its PNG preview.
document.querySelectorAll('img[data-fallback]').forEach((image) => {
  const showFallback = () => {
    image.removeEventListener('error', showFallback);
    image.src = image.dataset.fallback;
    image.alt += ' (placeholder; photo not yet supplied)';
  };

  image.addEventListener('error', showFallback, { once: true });

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  }
});
