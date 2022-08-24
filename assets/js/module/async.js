import {
  displayNumberCityNameList,
  displayMenuAutocomplete,
} from "./menuAutocomplete.js";
import { settings } from "./setting.js";
import { displayDataTodayWheater } from "./displayDataTodayWheater.js";
import { displayDataForcastWheater } from "./displayDataForcastWheater.js";

export async function addNameCityApi() {
  try {
    const response = await fetch(
      "https://api.teleport.org/api/cities/?search=" + searchLocation.value
    );
    const data = await response.json();
    let cityList = displayNumberCityNameList(data);
    displayMenuAutocomplete(cityList);
  } catch (error) {
    console.log(error);
  }
}

export async function addWheaterApi(nameCity) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        nameCity +
        "&units=" +
        settings.WheaterApi.units +
        "&appid=" +
        settings.WheaterApi.Key
    );
    const dataWheater = await response.json();

    displayDataTodayWheater(dataWheater);
    displayDataForcastWheater(dataWheater);
  } catch (error) {
    console.log(error);
  }
}

export async function addBackgroundImageApi(nameCity) {
  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?query=" +
        nameCity +
        "&client_id=" +
        settings.unsplashApi.key
    );
    const data = await response.json();
    document.body.style.backgroundImage = "url('" + data.urls.raw + "')";
  } catch (error) {
    console.log(error);
  }
}
