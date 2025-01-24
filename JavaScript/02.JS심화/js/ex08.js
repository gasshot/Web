let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let result = document.getElementById("result")
let climateList = null

// const url1 = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=8964d39c17769795d32d7d6278a7510d'
// const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=8964d39c17769795d32d7d6278a7510d'
// const url3 = 'https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=8964d39c17769795d32d7d6278a7510d'

const getWeatherData= (city)=>{

    let targetUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8964d39c17769795d32d7d6278a7510d`
    fetch(targetUrl)
        .then(res => res.json())
        .then(res => {
            console.log('데이터', res)
            climateList = res            
            let temp = parseInt(climateList.main.temp) - 273
            result.innerHTML = `<p>[결과] 현재 ${climateList.name}의 기온은 ${temp}도입니다. </p>`
        })
}

btn1.addEventListener('click', () => {
    getWeatherData(btn1.innerText)
})
btn2.addEventListener('click', () => {
    getWeatherData(btn2.innerText)
})
btn3.addEventListener('click', () => {
    getWeatherData(btn3.innerText)
})

