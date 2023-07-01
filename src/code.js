const body = document.querySelector('body')

const backgroundDiv = document.createElement('div')
backgroundDiv.setAttribute('id', 'backgroundDiv')

const backgroundImg = document.createElement('img')
backgroundImg.src = '/imagens/pexels-jaime-reimer-2662116.jpg'
backgroundImg.setAttribute('id', 'backgroundImg')



const mainDiv = document.createElement('div')
mainDiv.setAttribute('id', 'mainDiv')


const weatherDiv = document.createElement('div')
weatherDiv.setAttribute('id', 'weatherDiv')

let skySituation = document.createElement('div')
skySituation.textContent = `Partly cloudy`
skySituation.setAttribute('id', 'skySituation')

let placeName = document.createElement('div')
placeName.textContent = 'Brazil'
placeName.setAttribute('id', 'placeName')

let weatherInformationsRight = document.createElement('div')


let feels = document.createElement('div');
feels.textContent = `Feels like:28°`;
let wind = document.createElement('div')
wind.textContent =  `wind:16km/h`;

let Humidity = document.createElement('div')
Humidity.textContent = `Humidity:23%`;

weatherInformationsRight.append(feels,wind,Humidity)
weatherInformationsRight.setAttribute('id', 'weatherInformationsRight')


let weatherInformationsLeft = document.createElement('div')
weatherInformationsLeft.setAttribute('id','weatherInformationsLeft')
let temperature = document.createElement('div')
temperature.textContent = '28'
temperature.setAttribute('id', 'temperature')

let temperatureSymbol = document.createElement('div')
temperatureSymbol.textContent = `°C`
temperatureSymbol.setAttribute('id','temperatureSymbol')



weatherInformationsLeft.append(temperature,temperatureSymbol)

let weatherInformations = document.createElement('div')

weatherInformations.append(weatherInformationsLeft,weatherInformationsRight)
weatherInformations.setAttribute('id', 'weatherInformations')

const celsiusTofahrenheit = document.createElement('button')
celsiusTofahrenheit.textContent = 'Graus'

celsiusTofahrenheit.addEventListener('click', ()=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key= 995df5f9a4a84a838fd174457232106&q=${weatherInput.value}&aqi=no`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
    if(celsiusTofahrenheit.textContent == 'Graus') {
        temperature.textContent = response.current.temp_f
        temperatureSymbol.textContent = '°F'
        celsiusTofahrenheit.textContent = 'Fahrenheit'
        feels.textContent = `Feels like:${response.current.feelslike_f}°`
    }
    else if(celsiusTofahrenheit.textContent == 'Fahrenheit'){
        temperature.textContent = response.current.temp_c
                temperatureSymbol.textContent = '°C'
                celsiusTofahrenheit.textContent = 'Graus'
                feels.textContent = `Feels like:${response.current.feelslike_c}°`
    }
    })
    

})
 let weatherLogoDiv = document.createElement('div')
const weatherLogo = document.createElement('img')
weatherLogoDiv.append(weatherLogo)
weatherLogoDiv.setAttribute('id', 'weatherLogoDiv')
weatherLogo.src = '/imagens/sun.png'

const former = document.createElement('form')
const weatherInput = document.createElement('input')
const weatherButton = document.createElement('button')
weatherButton.textContent = 'Search'
former.action = '#'
former.append(weatherInput,weatherButton)



weatherDiv.append(skySituation,placeName,weatherInformations,celsiusTofahrenheit,former)
mainDiv.append(weatherDiv, weatherLogoDiv)

backgroundDiv.append(backgroundImg)
body.append(backgroundDiv,mainDiv)


weatherButton.addEventListener('click', ()=>{
    if(weatherInput.value.length <4){
        alert('Please input something')
        return
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key= 995df5f9a4a84a838fd174457232106&q=${weatherInput.value}&aqi=no`)
.then(function(response){
    return response.json()
})
.then(function(response){
   
    skySituation.textContent = response.current.condition.text
    placeName.textContent = response.location.country
    temperature.textContent = `${response.current.temp_c}`
    feels.textContent = `Feels like:${response.current.feelslike_c}°`
    wind.textContent =  `wind:${response.current.wind_kph}km/h`;
    Humidity.textContent = `Humidity:${response.current.humidity}%`

    if(skySituation.textContent == 'Clear'){
        weatherLogo.src = '/imagens/sun.png'
    }
    if(skySituation.textContent == 'Partly cloudy' || 'Overcast' || 'Mist'){
        weatherLogo.src = '/imagens/weather.png'
    }

    if(skySituation.textContent == 'Light rain shower'){
        weatherLogo.src = '/imagens/rainy-day.png'
    }


})

})
