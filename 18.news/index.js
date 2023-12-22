let loader =  document.getElementById('loader')
let content = document.getElementById('content')


let getNews = (search,page)=>{
 
    fetch(`https://api.worldnewsapi.com/search-news?text=${search}&number=12&offset=${page ? page : 0}`,{
        headers: {
            'x-api-key':' 947b4aa2d7f2457ebc89c1a64c3226b4'
          }
    })
    .then(res=> res.json())
    .then((res)=>{
        console.log(res);
        let News = document.getElementById('news');
        const articles = res.news
        for(var i =  0; i< articles.length; i++){
            loader.style.display= 'none'
            content.style.display = "block"
        //   console.log(articles[i]);
        const {image,title,text,publish_date}= articles[i]
        News.innerHTML += `<div class="card mt-3" style="width: 18rem;">
        <img src="${image}" class="news-image card-img-top" alt="...">
        <div class="card-body">
            <h5 ' class="card-title">${title.slice(0,20)}...</h5>
            <p class="card-text">${text.slice(0,51)}...</p>
            
            <span class="badge text-bg-info">${moment(publish_date).fromNow()}</span>
           
        </div>
    </div>`
        }
    })
    
    .catch(error => console.log(error,'err'))
}
 

     getNews()



     let page = 1


let newsSearch =()=>{
    let search = document.getElementById('search')
    console.log(search.value);
    let News = document.getElementById('news');
    News.innerHTML=''
    loader.style.display= 'flex'
    content.style.display = "none"
    getNews(search.value)
    search.value = ''
}


let loadMore =()=>{
    let search = document.getElementById('search')
    page++
    getNews(search.value, page)
}

// let Moretext=()=>{
//     // Swal.fire({
//     //     title: "Sweet!",
//     //     text: "Modal with a custom image.",
//     //     imageUrl: "https://unsplash.it/400/200",
//     //     imageWidth: 400,
//     //     imageHeight: 200,
//     //     imageAlt: "Custom image"
//     //   });
//     console.log('hi');
   
// }


