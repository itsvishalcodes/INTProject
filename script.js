const fetchNews = (cnt) => {
    let uri = `https://newsapi.org/v2/top-headlines?country=${cnt}&apiKey=3269e3eeba8e47558533dc9d4697a615`;
    let dataToInsert = ``;

    fetch(uri)
    .then(data => {
        return data.json();
    })
    .then(dataJSON => {
        let newsData = dataJSON.articles;
        for(let i=0; i<5; i++) {
            let news = newsData[i].title;
            dataToInsert = `
                ${dataToInsert} 
                <div class="news-element">${news}</div>
            `
        }
        let country = document.getElementById('country');
        let newsElem = document.getElementById('news-headlines');
        country.innerHTML = cnt;
        newsElem.innerHTML = dataToInsert;
        // console.log(dataToInsert);
    })
}

const fetchWeather = async () => {
    let locValue = document.getElementById('loc-search').value;
    // let locDataRaw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locValue}&appid=5e2dc30988b98449a8980559b271e964`);
    // let locDataJson = locDataRaw.json();
    // console.log(locValue);
    // console.log(locDataJson);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locValue}&units=metric&appid=5e2dc30988b98449a8980559b271e964`)
    .then((data) => {
        return data.json();
    })
    .then((retData) => {
        let tempElem = document.getElementById('weather-temp');
        let locationElem = document.getElementById('loc-main');
        let WeatherTypeElem = document.getElementById('weather-type');
        let tempMin = document.getElementById('temp-min')
        let tempMax = document.getElementById('temp-max')
        let tempFeel = document.getElementById('temp-feel')
        let pressure = document.getElementById('pressure')        
        let humidity = document.getElementById('humidity');

        // console.log(Math.floor(retData.main.temp));
        tempElem.innerHTML = `${Math.floor(retData.main.temp)}&deg;`;
        locationElem.innerHTML = `${locValue}`;
        WeatherTypeElem.innerHTML = retData.weather[0].main;
        tempMin.innerHTML = `${retData.main.temp_min}&deg;`;
        tempMax.innerHTML = `${retData.main.temp_max}&deg;`;
        tempFeel.innerHTML = `${retData.main.feels_like}&deg;`;
        pressure.innerHTML = `${retData.main.pressure}&deg;`;
        humidity.innerHTML = `${retData.main.humidity}&deg;`;

        let country = retData.sys.country;

        fetchNews(country);
    })
}

// fetchWeather();