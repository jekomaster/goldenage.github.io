document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre').forEach(pre => {
      const button = document.createElement('copy-code-button');
      pre.appendChild(button);
    });
  });