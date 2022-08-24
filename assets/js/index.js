import { removeMenuAutocomplete } from "./module/removeMenuAutocomplete.js";
import { nameCityTarget } from "./module/nameCityTarget.js";
import { addNameCityApi } from "./module/async.js";
import { addWheaterApi } from "./module/async.js";
import { addBackgroundImageApi } from "./module/async.js";

function setAddEventListener() {
  searchLocation.addEventListener("keyup", (event) => {
    addNameCityApi();
    removeMenuAutocomplete();
    if (event.target.value == "") {
      document.getElementById("divCountry").style.display = "none";
    } else {
      document.getElementById("divCountry").style.display = "block";
    }
  });

  document.getElementById("countryList").addEventListener("click", (event) => {
    let nameCity = nameCityTarget(event.target);

    document.getElementById("divCountry").style.display = "none";
    document.getElementById("main__section").style.display = "block";
    document.getElementById("footer__forcast").style.display = "block";

    addWheaterApi(nameCity);
    addBackgroundImageApi(nameCity);
    searchLocation.value = "";
  });

  document.getElementById("worldWheater").addEventListener("click", (event) => {
    document.getElementById("historic").style.display = "block";
  });

  document
    .getElementById("positionWheater")
    .addEventListener("click", (event) => {
      document.getElementById("historic").style.display = "none";
    });
}
setAddEventListener();
