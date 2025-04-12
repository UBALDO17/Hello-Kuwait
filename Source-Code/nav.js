// Wait until the page content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  const checkAndFetchTemp = () => {
    const kuwaitTemp = document.getElementById('kuwait-temp');
    if (kuwaitTemp) {
      const apiKey = '6094a14f259ef16b2582b19fbfd721a7';

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kuwait,KW&appid=${apiKey}&units=metric`)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          const temp = Math.round(data.main.temp);
          kuwaitTemp.textContent = `${temp}°C`;
        })
        .catch(error => {
          kuwaitTemp.textContent = 'N/A';
          console.error('Error fetching temperature:', error.message);
        });
    } else {
      // Retry after short delay if element not yet in DOM
      setTimeout(checkAndFetchTemp, 200);
    }
  };

  checkAndFetchTemp();
});
