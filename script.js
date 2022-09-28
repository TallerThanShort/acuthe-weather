//imports
let currentWeatherIcon = select("#weather_icon");
let currentWeather = select("#weather");

//weather icons
const sunny = `<img title="sunny" src="https://www.reshot.com/preview-assets/icons/S8WHC65U7J/sun-S8WHC65U7J.svg" style="width: 64px;">`;
const cloudy = `<img title="cloudy" src="https://www.reshot.com/preview-assets/icons/X3N7PHUCLR/weather-X3N7PHUCLR.svg" style="width: 64px;">`;
const windy = `<img title="windy" src="https://www.reshot.com/preview-assets/icons/R2FB5KLV6N/weather-wind-R2FB5KLV6N.svg" style="width: 64px;">`;
const rainy = `<img title="rainy" src="https://www.reshot.com/preview-assets/icons/YRQ52EZUTW/weather-YRQ52EZUTW.svg" style="width: 64px;">`;
const stormy = `<img title="stormy" src="https://www.reshot.com/preview-assets/icons/M3WXZVBKEN/weather-cloud-M3WXZVBKEN.svg" style="width: 64px;">`;

//Import Firebase Shid
const firebaseConfig = {
    apiKey: "AIzaSyCAq_dJofuaue2J3OOyMXUa2J_-STGJjG4",
    //authDomain: "acuthe-weather.firebaseapp.com",
    projectId: "acuthe-weather",
    storageBucket: "acuthe-weather.appspot.com",
    messagingSenderId: "692554729727",
    appId: "1:692554729727:web:f086aac789ac2b6b9224ca"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//start making weather predictions pls
db.collection('weather').doc('current').get().then(doc => {
    const detailed = doc.data();
    if(detailed.icon === 'sun'){
        currentWeatherIcon.innerHTML = sunny;
    } else if(detailed.icon === 'wind'){
        currentWeatherIcon.innerHTML = windy;
    } else if(detailed.icon === 'cloud'){
        currentWeatherIcon.innerHTML = cloudy;
    } else if(detailed.icon === 'rain'){
        currentWeatherIcon.innerHTML = rainy;
    } else if(detailed.icon === 'storm'){
        currentWeatherIcon.innerHTML = stormy;
    }
    currentWeather.innerText = `${detailed.detail}; ${detailed.temp}°C`
})

//simple function to write this shid faster
function select(el) {
    return document.querySelector(el);
}

//FDOM activate
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
});
