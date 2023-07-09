const apikey="5e23cf51bc080adbb28025040c45eb99";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName=document.querySelector(".city");
const tempe=document.querySelector(".temp");
const humidity=document.querySelector(".humid");
const windSpeed=document.querySelector(".speed");
const img=document.querySelector(".weatherImage");
const input=document.querySelector("input");
const btn=document.querySelector("#find");
const undefi=document.querySelector(".undef");
const feel=document.querySelector(".feels")
async function weather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);

    if(response.status==404){
        undefi.style.display="block";
        cityName.innerHTML="------ ------";
        feel.innerHTML="Feels like--°C";
        tempe.innerHTML="--°C";
        humidity.innerHTML="--%";
        windSpeed.innerHTML="-- km/h";
        img.style.display="none";
    }
    else{
        let data=await response.json();
        cityName.innerHTML=data.name;
        feel.innerHTML="Feels like "+Math.round(data.main.feels_like)+"°C";
        tempe.innerHTML=Math.round(data.main.temp)+"°C";
        humidity.innerHTML=data.main.humidity+"%";
        windSpeed.innerHTML=data.wind.speed+"km/h";
        if(data.weather[0].main==="Clear"){
            img.src="images/clouds.png";
        }
        else if(data.weather[0].main==="Rain"){
            img.src="images/rain.png";
        }
        else if(data.weather[0].main==="Clouds"){
            img.src="images/clouds.png";
        }
        else if(data.weather[0].main==="Snow"){
            img.src="images/snow.png";
        }
        else if(data.weather[0].main==="Drizzle"){
            img.src="images/drizzle.png";
        }
        else if(data.weather[0].main==="Mist"||data.weather[0].main==="Haze"){
            img.src="images/mist.png";  
        }
        img.style.display="inline"; 
        console.log(data);
    }
}
input.addEventListener("keydown",function(){
    undefi.style.display="none";
})
btn.addEventListener("click",function(){
    weather(input.value);
})
