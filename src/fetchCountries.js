export
function fetchCountries(name) {
  fetch(name)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}
fetchCountries('https://restcountries.com/v3.1/all?fields=name');

// fetch('https://restcountries.com/v3.1/all?fields=name')
//   // `https://restcountries.com/v3.1/name/${name}`
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .catch(error => {
//     console.log(error);
//   });
//
