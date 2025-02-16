// Hover Effect: Highlight Year on Hover
document.querySelectorAll('.year').forEach(year => {
  year.addEventListener('mouseover', () => {
      const yearInfo = year.querySelector('.year-info');
      yearInfo.style.opacity = '1'; // Show the reflection and fortune
  });

  year.addEventListener('mouseleave', () => {
      const yearInfo = year.querySelector('.year-info');
      yearInfo.style.opacity = '0'; // Hide the reflection and fortune
  });
});
