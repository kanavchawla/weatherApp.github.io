let weather={
    apiKey:'b0db6eac6439a5511c47997998528705',
    getWeather:function (country){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${this.apiKey}`).then((response)=>response.json()).then((data)=>this.chnageWeather(data));
    },
    chnageWeather:function(data){
        console.log(data);
        console.log(data.name);
        if(data.cod==404){
            alert("Invalid city");
        }
        else{
            // document.getElementById('city').innerHTML=`<h1>Weather in ${data.name}</h1>`;
            // document.getElementById('temp').innerHTML=`<h1>${data.main.temp} °C</h1>`;
            // document.getElementById('hum').innerHTML=`Humidity: ${data.main.humidity}%`;
            // document.getElementById('wind').innerHTML=`Wind Speed: ${data.wind.speed}km/hr`;
            document.getElementById('weather').innerHTML=`<div class="city" id="city"><h1>Weather in ${data.name}</h1></div>
            <div class="temperature" id="temp"><h1>${data.main.temp} °C</h1></div>
            <img src="" class="icon">
            <div class="humidity" id="hum">Humidity: ${data.main.humidity}%</div>
            <div class="windSpeed" id="wind">Wind Speed: ${data.wind.speed}km/hr</div>`
            document.getElementById('container').style.backgroundImage=`url("https://source.unsplash.com/1600x900?${data.weather[0].description}")`
        }
        
    }
}
document.getElementById('search-Btn').addEventListener('click',search);
document.getElementById('searchbar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});

function search(){
    // console.log('clicked');
    searchValue=document.getElementById('searchbar').value;
    // console.log(searchValue);
    document.getElementById('searchbar').value="";
    if(searchValue!=""){
        weather.getWeather(searchValue);
    }
}
