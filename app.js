var imgList = [
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/12/08/00/41/starry-sky-1081939_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/01/15/15/20/woman-3084129_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/06/23/14/20/moon-5332706_960_720.jpg"
]

function createSlider(){
    for(var i=0; i<imgList.length; i++){
        addImageToTheSlider(imgList[i], i);
    }
}

function addImageToTheSlider(imgurl, index){
    /* <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> */
    liTag=document.createElement("li");
    liTag.setAttribute("data-target", "#carouselExampleIndicators");
    liTag.setAttribute("data-slide-to", index);
    if(index == 0){
        liTag.setAttribute("class", "active");
    }
    document.querySelector(".carousel-indicators").append(liTag);

    /* <div class="carousel-item active">
        <img src="images/slide1.jpg" class="d-block w-100" alt="...">
    </div> */

    divTag=document.createElement("div");
    divTag.setAttribute("class", "carousel-item");
    if (index == 0) {
        divTag.setAttribute("class", "carousel-item active");
    }
    imgTag=document.createElement('img');
    imgTag.setAttribute("src", imgurl);
    imgTag.setAttribute("class", "d-block w-100");
    divTag.append(imgTag);
    
    document.querySelector(".carousel-inner").append(divTag); 

}

createSlider();
