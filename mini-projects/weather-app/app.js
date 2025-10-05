const request = require("postman-request");

// const url =
//   "http://api.weatherstack.com/current?access_key=725641cbd3fa667a46180349a4f8e87d&query=30.123431010121404,31.585396671689985";

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//     return;
//   }

//   if (response.body.error) {
//     console.log("Unable to find location!");
//     return;
//   }

//   const data = response.body.current;
//   console.log(
//     `${data.weather_descriptions[0]}. It's currently ${data.temperature} degrees out. It feel like ${data.feelslike} degrees out.`
//   );
// });

// Geocoding
const geoUrl = "https://geocode.maps.co/search?q=shorouk,%20Street%203";

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to geolocation service!");
    return;
  }

  const data = response.body[0];

  if (data) {
    console.log("Unable to find location! Try another search.");
    return;
  }

  console.log(`Current Lat: ${data.lat}, and current Long: ${data.lon}`);
});
