/**
 * here data is the name city from the teleport's API
 * @param {*} data
 */
export function displayNumberCityNameList(data) {
  let dataArray = [];
  for (let i = 0; i < 8; i++) {
    // 8 = number of name display in the menu
    dataArray.push(data._embedded["city:search-results"][i].matching_full_name);
  }
  return dataArray;
}

export function displayMenuAutocomplete(cityList) {
  let countryList = document.getElementById("countryList");
  for (let element of cityList) {
    let country = document.createElement("li");
    countryList.appendChild(country);
    let countryText = document.createTextNode(element);
    country.appendChild(countryText);
    country.id = "country";
  }
}
