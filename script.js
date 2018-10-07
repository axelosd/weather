(function(){
    var apikey = '83743db2792413eb68e67bc1f7411151';
fetch(
    'http://api.openweathermap.org/data/2.5/forecast?id=734077&units=metric&APPID='+apikey)

    .then(result => {
        return result.json();
    })

    .then (data => {
        const today = data.list[0]
        const city = data.city.name;
        const mainTemp = today.main.temp;
        const description = today.weather[0].description;
        const todayIcon = today.weather[0].icon;
        var icons = {
            "01d": 'clearDay',
            "01n": 'clearNight',
            "02d": 'fewCloudsDay',
            "02n": 'fewCloudsNight',
            "03d": 'scatteredCloudsDay',
            "03n": 'scatteredCloudsNight',
            "04d": 'brokenCloudsDay',
            "04n": 'brokenCloudsNight',
            "09d": 'showerRainDay',
            "09n": 'showerRainNight',
            "10d": 'rainDay',
            "10n": 'rainNight',
            "11d": 'thunderstormDay',
            "11n": 'thunderstormNight',
            "13d": 'snowDay',
            "13n": 'snowNight',
            "50d": 'mistDay',
            "50n": 'mistNight'
        };
        var icon = `images/weather-icons/${icons[`${todayIcon}`]}`;
        
        const weatherIcon = `<img src = "${icon}.png"/>`
        document.querySelector('#city').innerHTML = city;
        document.querySelector('#icon').innerHTML = weatherIcon;
        document.querySelector('#description').innerHTML = description;
        document.querySelector('#maintemp').innerHTML = mainTemp;
        
        
    })
    .catch(error => console.log(error));
})();