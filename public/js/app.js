//^ connexion //////////////////
let connexion = document.querySelector(".conx-1");
console.log(connexion);

connexion.addEventListener("click",()=>{
    
    let div = document.createElement("div");


})

//! vedio 1 ///////////////////////////////////////////////
const openVideo=()=>
{
contenu.classList.add("show");
}

const closeVideo=()=>
{
contenu.classList.remove("show");
}

let watchvideo= document.querySelector("#watchvideo");
let contenu =document.querySelector(".video_f");
let ferme = document.querySelector(".btn-close-vd");
watchvideo.addEventListener("click",openVideo)
ferme.addEventListener("click",closeVideo);
//! vedio 2 ///////////////////////////////////////////////
let icone_y=document.querySelector("#btn");
icone_y.addEventListener("click",()=>
{
  console.log("h");
  contenu.classList.add("show");
})
//! carousel /////////////////////////////////////////////////////
let carusel = document.querySelector(".carusel");
let isDrag = false,
  startX,
  startScrollLeft;

let slidBtn = document.querySelectorAll(".btnsslid button");


let firstWidth = document.querySelector(".card").offsetWidth;
slidBtn.forEach(btn => {
  btn.addEventListener('click',()=>{
    carusel.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;

})
});

const dragStart = (e) => {
  isDrag = true;
  carusel.classList.add("draging");
  startX = e.pageX;
  startScrollLeft = carusel.scrollLeft;
};
const draga = (e) => {
  if (!isDrag) return;
  carusel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = (e) => {
  isDrag = false;
  carusel.classList.remove("draging");
};
carusel.addEventListener("mouseover", draga);
carusel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
















