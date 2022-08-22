let date = new Date();
jours = new Array(
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
);
let tomorow = date.getDay()+1

let clickText = "";

async function displayWheater() {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        clickText +
        "&units=metric&appid=80131affd762f69e36c099cae83e779f"
    );
    const data = await response.json();

    // MAIN
    document.getElementById("town").innerHTML = data.city.name;
    document.getElementById("date").innerHTML = data.list[0].dt_txt;
    document.getElementById("degree").innerHTML = data.list[0].main.temp + "°c";
    document.getElementById("wheater").innerHTML =
      data.list[0].weather[0].description;
    document.getElementById("min-max").innerHTML =
      data.list[0].main.temp_max + "/" + data.list[0].main.temp_min + "°C";
    let iconWeather = document.getElementById("icon");
    iconWeather.src =
      "assets/images/icon/" + data.list[0].weather[0].main + ".png";
    document.getElementById("icon").alt = data.list[0].weather[0].main;

    // FOOTER
    for (let i = 0; i < 3; i++) {
      const results = data.list.filter(item => new Date(item.dt_txt).getDate() !==  date.getDate() && new Date(item.dt_txt).getHours() === 9);
      console.log(results);
      let forcast__img = document.getElementById("forcast__img" + i);
      forcast__img.src = `assets/images/icon/${results[i].weather[0].main}.png`;
      document.getElementById("forcast__img" + [i]).alt =results[i].weather[0].main;
      document.getElementById("forcast__minMax"+i).innerHTML =results[i].main.temp_max + "/" + results[i].main.temp_min + "°C";
      document.getElementById("forcast__day"+i).innerHTML = jours[tomorow + i];
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForcastWheater() {
  for (let i = 0; i < 3; i++) {
    let footer = document.querySelector("footer");

    let footer__div = document.createElement("div");
    footer.appendChild(footer__div);
    footer__div.classList = "forcast";

    let footer__div__img = document.createElement("img");
    footer__div.appendChild(footer__div__img);
    footer__div__img.src = "";
    footer__div__img.id = "forcast__img" + [i];

    let footer__div__minMax = document.createElement("p");
    footer__div.appendChild(footer__div__minMax);
    let footer__div__minMax__text = document.createTextNode("");
    footer__div__minMax.appendChild(footer__div__minMax__text);
    footer__div__minMax.id = "forcast__minMax" + [i];

    let footer__div__day = document.createElement("p");
    footer__div.appendChild(footer__div__day);
    let footer__div__day__text = document.createTextNode("");
    footer__div__day.appendChild(footer__div__day__text);
    footer__div__day.id = "forcast__day" + [i];
  }
}

let dataArray = [];

searchLocation.addEventListener("keyup", (event) => {
  dataArray = [];
  fetchQuotes();
  removeMenuAutocomplete();
  if (event.target.value == "") {
    document.getElementById("divCountry").style.display = "none";
  } else {
    document.getElementById("divCountry").style.display = "block";
  }
});

async function fetchQuotes() {
  try {
    const response = await fetch(
      "https://api.teleport.org/api/cities/?search=" + searchLocation.value
    );
    const data = await response.json();
    for (let i = 0; i < 3; i++) {
      dataArray.push(
        data._embedded["city:search-results"][i].matching_full_name
      );
    }
    displayMenuAutocomplete();
  } catch (error) {}
}

function displayMenuAutocomplete() {
  let countryList = document.getElementById("countryList");
  for (element of dataArray) {
    let country = document.createElement("li");
    countryList.appendChild(country);
    let countryText = document.createTextNode(element);
    country.appendChild(countryText);
    country.id = "country";
  }
}

function removeMenuAutocomplete() {
  let country = document.querySelectorAll("li");
  for (element of country) {
    element.remove();
  }
}

document.getElementById("countryList").addEventListener("click", (event) => {
  const words = event.target.textContent.split(" ");
  clickText = words[0];
  document.getElementById("divCountry").style.display = "none";
  document.getElementById("main__section").style.display = "block";
  document.getElementById("footer__forcast").style.display = "block";
  displayWheater();
  displayphoto();
  searchLocation.value = "";
});

// https://api.unsplash.com/photos/random?query="+ clickText +"&client_id=MQo0FbNdtKznD1F3GbdvBQ5NbxCXu2_UaGYzuiPdNaI


async function displayphoto() {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random?query="+clickText+"&client_id=MQo0FbNdtKznD1F3GbdvBQ5NbxCXu2_UaGYzuiPdNaI");
    const data = await response.json();
    console.log(data.urls.raw);
    document.body.style.backgroundImage = "url('"+data.urls.raw+"')";
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("worldWheater").addEventListener("click", (event) => {
  document.getElementById("historic").style.display = "block";
});

document.getElementById("positionWheater").addEventListener("click", (event) => {
  document.getElementById("historic").style.display = "none";
});