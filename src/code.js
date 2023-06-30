const body = document.querySelector('body')

const backgroundDiv = document.createElement('div')
backgroundDiv.setAttribute('id', 'backgroundDiv')

const backgroundImg = document.createElement('img')
backgroundImg.src = '/imagens/pexels-jaime-reimer-2662116.jpg'
backgroundImg.setAttribute('id', 'backgroundImg')

const mainDiv = document.createElement('div')


const weatherDiv = document.createElement('div')
weatherDiv.setAttribute('id', 'weatherDiv')

let skySituation = document.createElement('div')
skySituation.textContent = 'Clear Sky'
skySituation.setAttribute('id', 'skySituation')

let placeName = document.createElement('div')
placeName.textContent = 'Brazil'
placeName.setAttribute('id', 'placeName')

let weatherInformationsRight = document.createElement('div')

let feelsLike = '40°';
let feels = document.createElement('div');
feels.textContent = `Feels like:${feelsLike}`;
let windValue = '4km/h';
let wind = document.createElement('div')
wind.textContent =  `wind: ${windValue}`;
let HumidityValue = '24%';
let Humidity = document.createElement('div')
Humidity.textContent = `Humidity: ${HumidityValue}`;

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

const grausTofahrenheit = document.createElement('button')
grausTofahrenheit.textContent = 'Graus'

grausTofahrenheit.addEventListener('click', ()=>{
    if(grausTofahrenheit.textContent == 'Graus'){
        temperature.textContent = '82,4'
        temperatureSymbol.textContent = '°F'
    grausTofahrenheit.textContent = 'Fahrenheit'

}
    else if(grausTofahrenheit.textContent == 'Fahrenheit') {
        
        temperature.textContent = '28'
        temperatureSymbol.textContent = '°C'
        grausTofahrenheit.textContent = 'Graus'
    }
})
 let weatherLogoDiv = document.createElement('div')
const weatherLogo = document.createElement('img')
weatherLogoDiv.append(weatherLogo)
weatherLogoDiv.setAttribute('id', 'weatherLogoDiv')
// weatherLogo.src = '/imagens/sunny-day.png'
// weatherLogo.src = '/imagens/weather.png'
weatherLogo.src = '/imagens/sun.png'
// weatherLogo.src = '/imagens/rainy-day.png'

const former = document.createElement('form')
const weatherInput = document.createElement('input')
const weatherButton = document.createElement('button')
weatherButton.textContent = 'Search'
former.action = '#'
former.append(weatherInput,weatherButton)



weatherDiv.append(skySituation,placeName,weatherInformations,grausTofahrenheit,former)
mainDiv.append(weatherDiv, weatherLogoDiv)
backgroundDiv.append(backgroundImg)
body.append(backgroundDiv,mainDiv)