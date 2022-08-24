import { date, jours, tomorow } from "./day.js";

/**
 * displays the forcast day’s information from wheater map
 * here data = the information of the API
 * @param {*} dataWheater
 */
export function displayDataForcastWheater(dataWheater) {
  const results = dataWheater.list.filter(
    (item) =>
      new Date(item.dt_txt).getDate() !== date.getDate() &&
      new Date(item.dt_txt).getHours() === 9
  );

  let footer = document.querySelector("footer");
  footer.firstChild.remove();

  let section = document.createElement("section");

  for (let element of results) {
    let footer__div = document.createElement("div");
    let img = document.createElement("img");
    let minMax = document.createElement("p");
    let day = document.createElement("p");

    footer.appendChild(section);
    section.appendChild(footer__div);
    footer__div.appendChild(img);
    footer__div.appendChild(minMax);
    footer__div.appendChild(day);

    footer__div.className = "forcast";
    section.className = "forcast__section";
    img.className = "forcast__img";
    minMax.className = "forcast__minMax";
    day.className = "forcast__day";

    img.src = "assets/images/icon/" + element.weather[0].main + ".png";
    minMax.innerHTML =
      element.main.temp_max + "/" + element.main.temp_min + "°C";
    day.innerHTML = jours[tomorow];
  }
}
