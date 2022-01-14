fetch('https://icanhazdadjoke.com/slack')
.then(data=> data.json())
.then(jokeData =>{
    const jokeText= jokeData.attachments[0].text;
    const jokeEl= document.getElementById('jokeEl');

    jokeEl.innerHTML= jokeText;
});

var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
var curr= new Date().toLocaleString().replace(',','')
document.getElementById("todaysdate").innerHTML = curr;