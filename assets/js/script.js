

async function fetchQuotes() {
    try {
        const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=vancouver&units=metric&appid=80131affd762f69e36c099cae83e779f");
        const data = await response.json();
        // console.log(data.city.name);
        // console.log(data.list[0].dt_txt);
        // console.log(data.list[0].main.temp + "°c");
        // console.log(data.list[0].weather[0].main);
        // console.log(data.list[0].main.temp_max +"/"+ data.list[0].main.temp_min + "°C");
         console.log(data);
        // document.getElementById("town").innerHTML = data.city.name;
        // document.getElementById("date").innerHTML = data.list[0].dt_txt;
        // document.getElementById("degree").innerHTML = data.list[0].main.temp + "°c";
        // document.getElementById("wheater").innerHTML = data.list[0].weather[0].main;
        // document.getElementById("min-max").innerHTML = data.list[0].main.temp_max +"/"+ data.list[0].main.temp_min + "°C";
        // let iconWeather = document.getElementById("icon")
        // iconWeather.src = "assets/images/"+data.list[0].weather[0].main+".png"
        // document.getElementById("icon").alt = data.list[0].weather[0].main;
    } catch (error) {
        alert("Error", error);
    }
  }fetchQuotes()



function displayForcastWheater() {
    let footer = document.querySelector('footer')

    let footer__div = document.createElement('div')
    footer.appendChild(footer__div)
    footer__div.classList = 'one forcast'

    let footer__div__img = document.createElement('img')
    footer__div.appendChild(footer__div__img)
    footer__div__img.src = 'assets/images/icon/cloudy-clear.png'

    let footer__div__minMax = document.createElement('p')
    footer__div.appendChild(footer__div__minMax)
    let footer__div__minMax__text = document.createTextNode('12/8°C')
    footer__div__minMax.appendChild(footer__div__minMax__text)

    let footer__div__day = document.createElement('p')
    footer__div.appendChild(footer__div__day)
    let footer__div__day__text = document.createTextNode('Tuesday')
    footer__div__day.appendChild(footer__div__day__text)
}
displayForcastWheater()