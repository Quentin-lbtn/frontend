fetch('https://verceldemo-backend.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
   console.log(data)
 });