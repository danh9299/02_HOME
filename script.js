document.addEventListener('DOMContentLoaded', () => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Toolbar: {
        display: ['close'],
      },
      Thumbs: {
        autoStart: false,
      },
    });
  });
  