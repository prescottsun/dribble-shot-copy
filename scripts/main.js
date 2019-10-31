// const weatherDiv = document.querySelector("[data-weather]");
// const cityForm = document.querySelector("#cityForm");
// const input = document.querySelector(".input");
// const formButton = cityForm.querySelector("button");
const background = document.querySelector(".hero.is-info");
console.log('background',background)
const subtitleText = document.querySelector(".jokeSetup");
const newJokeButton = document.querySelector("#newJoke");
const answerButton = document.querySelector("#answer");
const answerText = document.querySelector(".answerText")
const newBackgroundButton = document.querySelector("#newBackground");

// formButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     const newLocation = input.value;
//     getWeather(newLocation);
//     console.log(newLocation);
// });

newJokeButton.addEventListener("click", function(e) {
    e.preventDefault();
    getJoke(jokeUrl);
});

answerButton.addEventListener("click", function(e) {
    e.preventDefault();
    answerText.style.visibility = "visible";
})

newBackgroundButton.addEventListener("click", function(e) {
    e.preventDefault();
    getApi(1);
})


function addBackground(image) {
    
    background.style.backgroundImage = `url(${image})`;
    // console.log(image)
    // const iconCode = conditions.icon;
    // const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    // const conditionsELement = document.createElement("h2");
    // conditionsELement.innerHTML = "Current Conditions: " + conditions.description;
    // weatherDiv.append(conditionsELement);

    // const iconElement = document.createElement("img");
    // iconElement.src = iconUrl;
    // weatherDiv.append(iconElement);
    
};

function addSubtitle(line1, line2) {
    subtitleText.innerHTML = line1;
    // subtitleText.innerHTML += "<br />" + line2;
    // const answer = document.createElement("p");
    answerText.style.visibility = "hidden"
    answerText.innerHTML = line2;


}
// function addMap(lat, lon) {
//     const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
//     // add an <iframe> element with the src = mapURL
//     const iframe = document.createElement("iframe");
//     iframe.src = mapUrl;
//     weatherDiv.append(iframe);

function getApi(number) {
    const URL = `http://shibe.online/api/shibes?count=${number}&urls=true&httpsUrls=true`;
    get(URL).then(function(response) {
        // addLocationName(response.name);
        // addConditions(response.weather[0]);
        // addTemp(response.main.temp);
        // addWind(response.wind.speed);
        // addMap(response.coord.lat, response.coord.lon);
        // addSunInfo(response.sys.sunrise, response.sys.sunset);
        // console.log(response);
        addBackground(response[0]);
    });
}

function getJoke(url) {
    get(url).then(function(response) {
        addSubtitle(response.setup, response.punchline)
    })
}

let jokeUrl = 'https://official-joke-api.appspot.com/random_joke'
getApi(1);
getJoke(jokeUrl);
