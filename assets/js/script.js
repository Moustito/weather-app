let date = new Date()
jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');

async function fetchQuotes() {
    try {
        //  const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=vancouver&units=metric&appid=80131affd762f69e36c099cae83e779f");
        //  const data = await response.json();
        // console.log(data.city.name);
        // console.log(data.list[0].dt_txt);
        // console.log(data.list[0].main.temp + "°c");
        // console.log(data.list[0].weather[0].main);
        // console.log(data.list[0].main.temp_max +"/"+ data.list[0].main.temp_min + "°C");
        //  console.log(data);
        
        // MAIN
        // document.getElementById("town").innerHTML = data.city.name;
        // document.getElementById("date").innerHTML = data.list[0].dt_txt;
        // document.getElementById("degree").innerHTML = data.list[0].main.temp + "°c";
        // document.getElementById("wheater").innerHTML = data.list[0].weather[0].description;
        // document.getElementById("min-max").innerHTML = data.list[0].main.temp_max +"/"+ data.list[0].main.temp_min + "°C";
        // let iconWeather = document.getElementById("icon")
        // iconWeather.src = "assets/images/icon/"+data.list[0].weather[0].main+".png"
        // document.getElementById("icon").alt = data.list[0].weather[0].main;

        // FOOTER
        // for (let i=0 ; i < 3; i++) {
        // let forcast__img = document.getElementById("forcast__img"+[i])
        // forcast__img.src = "assets/images/icon/"+data.list[0].weather[0].main+".png"
        // document.getElementById("forcast__img"+[i]).alt = data.list[0].weather[0].main;
        // document.getElementById("forcast__minMax"+[i]).innerHTML = data.list[0].main.temp_max +"/"+ data.list[0].main.temp_min + "°C";
        // document.getElementById("forcast__day"+[i]).innerHTML = jours[x+i+1];
    }
    catch (error) {
        alert("Error", error);
    }
}
  fetchQuotes()



function displayForcastWheater() {
    for (let i=0 ; i < 3; i++) {
    let footer = document.querySelector('footer')

    let footer__div = document.createElement('div')
    footer.appendChild(footer__div)
    footer__div.classList = 'forcast'

    let footer__div__img = document.createElement('img')
    footer__div.appendChild(footer__div__img)
    footer__div__img.src = ''
    footer__div__img.id = "forcast__img"+[i]

    let footer__div__minMax = document.createElement('p')
    footer__div.appendChild(footer__div__minMax)
    let footer__div__minMax__text = document.createTextNode('')
    footer__div__minMax.appendChild(footer__div__minMax__text)
    footer__div__minMax.id = "forcast__minMax"+[i]

    let footer__div__day = document.createElement('p')
    footer__div.appendChild(footer__div__day)
    let footer__div__day__text = document.createTextNode('')
    footer__div__day.appendChild(footer__div__day__text)
    footer__div__day.id = "forcast__day"+[i]
}
}
displayForcastWheater()