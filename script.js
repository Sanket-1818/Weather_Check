<script>
        const apiKey="860091048d6dbb2a170101a19e7dc4a2";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q";
        
        const searchBox=document.querySelector(".search input")
        const searchBtn=document.querySelector(".search button")


        async function checkWeather(city){
            const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data=await response.json(); 

            console.log(data);

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.main.wind+"km/hr";

            // if(data.weather[0])
        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })

        checkWeather();
    </script>
