/**
 * displays the day’s information from wheater map
 * @param {*} dataWheater
 */
export function displayDataTodayWheater(dataWheater) {
  document.getElementById("town").innerHTML = dataWheater.city.name;
  document.getElementById("date").innerHTML = dataWheater.list[0].dt_txt;
  document.getElementById("degree").innerHTML =
    dataWheater.list[0].main.temp + "°c";
  document.getElementById("wheater").innerHTML =
    dataWheater.list[0].weather[0].description;
  document.getElementById("min-max").innerHTML =
    dataWheater.list[0].main.temp_max +
    "/" +
    dataWheater.list[0].main.temp_min +
    "°C";
  let iconWeather = document.getElementById("icon");
  iconWeather.src =
    "assets/images/icon/" + dataWheater.list[0].weather[0].main + ".png";
  document.getElementById("icon").alt = dataWheater.list[0].weather[0].main;
}
