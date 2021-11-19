const fetchWeather = async () => {
    let locValue = document.getElementById('loc-search').value;
    let locDataRaw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locValue}&appid=5e2dc30988b98449a8980559b271e964`);
    let locDataJson = locDataRaw.json();
    console.log(locValue);
    console.log(locDataJson.base);
}