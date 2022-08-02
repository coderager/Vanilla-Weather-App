function cityNames(event) {
  event.preventDefault();
  let apiKey = "930a2ab6e6b1cf63e6149ae148c24462";
  let units = "imperial";
  let city = document.querySelector("#enter-city");
  let cityEntered = city.value;
  let cityTrimmed = cityEntered.trim();
  let cityToLower = cityTrimmed.toLocaleLowerCase();
  let cityDisplayed =
    cityToLower.charAt(0).toUpperCase() + cityToLower.slice(1);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityDisplayed}`;
  let enteredApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityDisplayed}&appid=${apiKey}&units=${units}`;
  axios.get(enteredApiUrl).then(showTemps);
}

function showPosition(position) {
  let apiKey = "930a2ab6e6b1cf63e6149ae148c24462";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "imperial";
  /* let currentCityName = position.data.name; */
  //console.log(position);
  /*console.log(position.name); //*/
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTempsAndCurrentLocationName);
  /* let h1 = document.querySelector("h1"); */
  /*   h1.innerHTML = `${currentCityName}`;
   */
}

function showTempsAndCurrentLocationName(response) {
  console.log(response.data);
  let todaysTemp = Math.round(response.data.main.temp);
  console.log(todaysTemp);
  let currentCityName = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${currentCityName}`;
  let replaceTodaysTemps = document.querySelector(".todaysDegrees");
  replaceTodaysTemps.innerHTML = `${todaysTemp} °F`;
}

function showTemps(response) {
  console.log(response.data);
  let todaysTemp = Math.round(response.data.main.temp);
  console.log(todaysTemp);
  let replaceTodaysTemps = document.querySelector(".todaysDegrees");
  replaceTodaysTemps.innerHTML = `${todaysTemp} °F`;
  let cityTime = response.current.dt;
  let replaceCurrentTime = document.querySelector(".currentTime");
  replaceCurrentTime.innerHTML = `${cityTime}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let displayCity = document.querySelector("#city-form");
console.log(displayCity);
displayCity.addEventListener("submit", cityNames);

function yourTime() {
  let today = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[today.getMonth()];
  let daysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let time = [today.getTime()];
  let day = daysofWeek[today.getDay()];
  let date = today.getDate();
  let year = today.getFullYear();
  let clock = today.getHours() + ":" + today.getMinutes();
  let currentDate = document.querySelector("h3");
  currentDate.innerHTML = `${day}, ${month} ${date}, ${year}`;
  let firstTile = document.querySelector("#tile-one");
  console.log(firstTile);
  firstTile.innerHTML = daysofWeek[today.getDay() + 1];
  let secondTile = document.querySelector("#tile-two");
  secondTile.innerHTML = daysofWeek[today.getDay() + 2];
  let thirdTile = document.querySelector("#tile-three");
  thirdTile.innerHTML = daysofWeek[today.getDay() + 3];
  let fourthTile = document.querySelector("#tile-four");
  fourthTile.innerHTML = daysofWeek[today.getDay() + 4];
  let fifthTile = document.querySelector("#tile-five");
  fifthTile.innerHTML = daysofWeek[today.getDay() + 5];
  let sixthTile = document.querySelector("#tile-six");
  sixthTile.innerHTML = daysofWeek[today.getDay() + 6];
}

let displayTime = document.querySelector("#city-form");
displayTime.addEventListener("submit", yourTime);
console.log(displayTime);

let displayTimeGeoLocation = document.querySelector(
  "#geolocation-temps-submit"
);
displayTimeGeoLocation.addEventListener("click", yourTime);
console.log(displayTime);

let currentLocationButton = document.querySelector("button");
currentLocationButton.addEventListener("click", getCurrentPosition);
