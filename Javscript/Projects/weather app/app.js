let input = document.querySelector("input");
let btn = document.querySelector("button");
let div = document.querySelector("div");


btn.addEventListener("click",()=>{

    let city = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=25134ac7c0eba68dd6c619caefb446c3`;
    getWeather(url);
    

});

async function getWeather(url){

    try{
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
        div.innerHTML = "";

        if(data.cod == 404){
            div.innerHTML = "city not Found";
            return;
        }
        let name = document.createElement("h2");
        div.appendChild(name);
        name.innerText = `City : ${data.name}`;

        let temp = document.createElement("h2");
        div.appendChild(temp);
        temp.innerText = `Temperature : ${data.main.temp}`;

        let windDeg = document.createElement("h2");
        div.appendChild(windDeg);
        windDeg.innerText = `Wind Deg : ${data.wind.deg}`

        let windSpeed = document.createElement("h2");
        div.appendChild(windSpeed);
        windSpeed.innerText = `Wind Speed : ${data.wind.speed}`

        let weather = document.createElement("h2");
        div.appendChild(weather);
        weather.innerText = `Weather : ${data.weather[0].description}`

        input.value = "";
    
    }
    catch(e){
        div.innerHTML = "Something Went Wrong";
        console.log("Error",e);
    }
    

}
    
