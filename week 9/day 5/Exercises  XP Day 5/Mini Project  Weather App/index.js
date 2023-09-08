const country_decode = new Intl.DisplayNames(
    ['en'], {type: 'region'}
    );
let search_history = [];
let search_history_id = 0;

function getWeather(event) {
    document.getElementsByClassName("switch")[0].style.visibility = "visible"
    let parent_div = document.getElementById("weather");
    if (parent_div.childElementCount >= 4){
        parent_div.innerHTML="";
    };

    let single_search = {}
    search_history_id ++
    single_search.id=search_history_id
    event.preventDefault()
    let city = document.getElementById("city").value;
    if (city == ""){
        alert("please'enter the city thank you");
        return
    };
    
    document.getElementById("city").value = "";

    const xhr = new XMLHttpRequest ();
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
    xhr.onload = () =>{
        
        let div_card = document.createElement("div");
        div_card.classList.add("weather_card");
        if (JSON.parse(xhr.response).cod == 404){
            xhr.abort();
            alert("There's no such city! please try again");
            
        }
        let res = JSON.parse(xhr.response);

    
       
    //Weather icon
        let weather_icon = document.createElement("img");
        weather_icon.src=`https://openweathermap.org/img/wn/${res.weather[0].icon}.png`;
        div_card.appendChild(weather_icon);

    //Descriprion
        let weather_description = document.createElement("p");
        weather_description.innerText=res.weather[0].description;
        div_card.appendChild(weather_description);
        single_search.weather = res.weather[0].description;

    //Temperature
        let temperature = document.createElement("p");
        temperature.innerText = `${(res.main.temp).toFixed(1)}° C`;
        temperature.style.fontSize="30px";
        temperature.classList.add("temperature");
        temperature.temp = res.main.temp;
        single_search.temp = res.main.temp;
        div_card.appendChild(temperature);

    //Humidity
        let humidity = document.createElement("p");
        humidity.innerText = `${res.main.humidity}%`;
        humidity.style.fontSize="30px";
        single_search.humidity = res.main.humidity;
        div_card.appendChild(humidity);

    //City
        let city = document.createElement("p");
        city.innerText = res.name
        div_card.appendChild(city);
        single_search.city = res.name;

    //Country
        let country = document.createElement("p");
        country.innerText = country_decode.of(res.sys.country);
        single_search.country = res.sys.country;
        div_card.appendChild(country);

    //Close button
    let close_btn = document.createElement("button");
    close_btn.innerText="X";
    close_btn.style="position: absolute; top: 0; right: 0;"
    close_btn.onclick = function(){
        close_btn.parentElement.remove();
        if (document.getElementById("weather").childElementCount==0){
            document.getElementsByClassName("switch")[0].style.visibility = "hidden";
        }; 
    };
    div_card.appendChild(close_btn);
    


        search_history.push(single_search);
        // console.log(search_history);

        parent_div.appendChild(div_card);


    };
    xhr.send();
}


function temChange(e) {
    // let multiplier = (9/5 + 32);
    let temp = document.getElementsByClassName("temperature");
    for (i of temp){
        if (e.target.checked){
            i.innerText = `${(i.temp*9/5 + 32).toFixed(1)}°F`
        }
        else {i.innerText = `${i.temp.toFixed(1)}°C`}
    }
    
    
    
}
