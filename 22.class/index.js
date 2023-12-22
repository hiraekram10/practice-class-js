fetch('https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=92cffd285e7c2e53123d27889dc3b7fc')
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=> err,'error')
