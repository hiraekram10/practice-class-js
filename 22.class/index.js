fetch('https://api.openweathermap.org/data/2.5/weather?q=Lahore&units=metric&appid=92cffd285e7c2e53123d27889dc3b7fc')
    .then(res => res.json())
    .then((res) => {
        console.log(res)
        let text = res
        let content = document.getElementById('content')
        let Weather = res.weather
        for(var i = 0;i<Weather.length; i++){
            
          
            
        }

        content.innerHTML += ` <div class="card " style="width: 18rem;">
   <img src=""
       class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title">${text.main.temp}<sup>o</sup></h5>
       <p class="card-text">${text.name}</p>
   </div>
   <ul class="list-group list-group-flush">
       <li class="list-group-item">/li>
       <li class="list-group-item">A second item</li>
       <li class="list-group-item">A third item</li>
   </ul>
   <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
   </div>
</div>`
    
    
})
    .catch(err => err, 'error')
