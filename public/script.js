const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d2859fca11mshbe65717de311053p10bc30jsn059d4784f140",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) => {
  // This is to change the city name
  cityname.innerHTML = city;



  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city/*Here city si added to change the city dynamically*/ , options)
    .then((responce) => responce.json())
    .then((responce) => {
		
      console.log(responce);

      // cloud_pct.innerHTML = responce.cloud_pct;
      temp.innerHTML = responce.temp;
      temp2.innerHTML = responce.temp;
      feels_like.innerHTML = responce.feels_like;
      humidity.innerHTML = responce.humidity;
      humidity2.innerHTML = responce.humidity;
      min_temp.innerHTML = responce.min_temp;
      max_temp.innerHTML = responce.max_temp;
      wind_speed.innerHTML = responce.wind_speed;
      wind2_speed.innerHTML = responce.wind_speed;
      wind_degrees.innerHTML = responce.wind_degrees;
      sunrise.innerHTML = responce.sunrise;
      sunset.innerHTML = responce.sunset;
    })
    .catch((err) => console.error(err));
};

// When we click on submit
submit.addEventListener("click", (err) => {
  // To prevent Reload
  err.preventDefault();
  getweather(city.value);
});

getweather("Mumbai");

const getweatherMum = () => {
  // This is to change the city name
 
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai"/*Here city si added to change the city dynamically*/ , options)
    .then((responce) => responce.json())
    .then((responce) => {
		
      console.log(responce);

      cloud_pctM.innerHTML = responce.cloud_pct;
      tempM.innerHTML = responce.temp;
      feels_likeM.innerHTML = responce.feels_like;
      humidityM.innerHTML = responce.humidity;
      min_tempM.innerHTML = responce.min_temp;
      max_tempM.innerHTML = responce.max_temp;
      wind_speedM.innerHTML = responce.wind_speed;
      wind_degreesM.innerHTML = responce.wind_degrees;
      sunriseM.innerHTML = responce.sunrise;
      sunsetM.innerHTML = responce.sunset;
    })
    .catch((err) => console.error(err));
};
getweatherMum();



// Object for Pune 
const getweatherPune = () => {
  // This is to change the city name
 
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune"/*Here city si added to change the city dynamically*/ , options)
    .then((responce) => responce.json())
    .then((responce) => {
		
      console.log(responce);

      cloud_pctP.innerHTML = responce.cloud_pct;
      tempP.innerHTML = responce.temp;
      feels_likeP.innerHTML = responce.feels_like;
      humidityP.innerHTML = responce.humidity;
      min_tempP.innerHTML = responce.min_temp;
      max_tempP.innerHTML = responce.max_temp;
      wind_speedP.innerHTML = responce.wind_speed;
      wind_degreesP.innerHTML = responce.wind_degrees;
      sunriseP.innerHTML = responce.sunrise;
      sunsetP.innerHTML = responce.sunset;
    })
    .catch((err) => console.error(err));
};
getweatherPune();


// Object for Bangalore
const getweatherBang = () => {
  // This is to change the city name
 
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore"/*Here city si added to change the city dynamically*/ , options)
    .then((responce) => responce.json())
    .then((responce) => {
		
      console.log(responce);

      cloud_pctB.innerHTML = responce.cloud_pct;
      tempB.innerHTML = responce.temp;
      feels_likeB.innerHTML = responce.feels_like;
      humidityB.innerHTML = responce.humidity;
      min_tempB.innerHTML = responce.min_temp;
      max_tempB.innerHTML = responce.max_temp;
      wind_speedB.innerHTML = responce.wind_speed;
      wind_degreesB.innerHTML = responce.wind_degrees;
      sunriseB.innerHTML = responce.sunrise;
      sunsetB.innerHTML = responce.sunset;
    })
    .catch((err) => console.error(err));
};
getweatherBang();


// Object for Hyderabad
const getweatherHyder = () => {
  // This is to change the city name
 
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad" , options)
    .then((responce) => responce.json())
    .then((responce) => {
		
      console.log(responce);

      cloud_pctH.innerHTML = responce.cloud_pct;
      tempH.innerHTML = responce.temp;
      feels_likeH.innerHTML = responce.feels_like;
      humidityH.innerHTML = responce.humidity;
      min_tempH.innerHTML = responce.min_temp;
      max_tempH.innerHTML = responce.max_temp;
      wind_speedH.innerHTML = responce.wind_speed;
      wind_degreesH.innerHTML = responce.wind_degrees;
      sunriseH.innerHTML = responce.sunrise;
      sunsetH.innerHTML = responce.sunset;
    })
    .catch((err) => console.error(err));
};
getweatherHyder();