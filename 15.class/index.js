var backgroundImg;

function addPost() {
    var title = document.getElementById('title');
    var description = document.getElementById('description');
    // console.log(title.value + description.value);
    console.log('bg', backgroundImg);

    if (title.value.trim() && description.value.trim()) {
        var posts = document.getElementById('posts')

        //card design
        posts.innerHTML += `<div class="card mycard mb-2 col-10 col-sm-12 col-md-8 col-lg-10">
<div class="card-header">
    Post
</div>
<div style= "background-image:url(${backgroundImg});background-size:cover" class="card-body">
    <blockquote class="blockquote mb-0">
        <p>${title.value}</p>
        <footer class="blockquote-footer">${description.value}</footer>
    </blockquote>
</div>
</div>`
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the post",

        });

    }

}


function selectImage(src) {
      backgroundImg = src;
    // var firstImg = document.getElementById('firstImg')
    // firstImg.setAttribute('class',"images-list-selected")

    // console.log(src);

    var bgImg = document.getElementsByClassName('bg-img');
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].className = 'bg-img'
    }


    event.target.className += " images-list-selected"

 
}