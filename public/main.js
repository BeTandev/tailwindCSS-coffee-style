const toggleTopMenu = document.getElementById("ct-toggle-top-menu");
const topMenu = document.getElementById("ct-top-menu");

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-topmenu-expanded");
  }
  else{
    if(topMenu.classList.contains("ct-topmenu-expanded")){
        topMenu.classList.remove("ct-topmenu-expanded")
        topMenu.classList.add("hidden")
    }
  }
});

const openCart = document.getElementById("open-cart")
const closeCart = document.getElementById("close-cart")
const cart = document.getElementById("cart")
openCart.addEventListener("click", () => {
  cart.classList.toggle('hidden')
})
closeCart.addEventListener("click", () =>{
  cart.classList.toggle("hidden")
})


const sliderPoint1 = document.getElementById("slider-point-1")
const sliderPoint2 = document.getElementById("slider-point-2")
const sliderImage1 = document.getElementById("slider-image-1")
const sliderImage2 = document.getElementById("slider-image-2")

sliderPoint2.addEventListener("click", (e) => {
  sliderImage1.style.transform = `translateX(-880px)`;
  sliderImage2.style.transform = `translateX(-880px)`;
  sliderPoint2.classList.add("bg-slate-600")
  sliderPoint1.classList.remove("bg-slate-600")
  sliderPoint1.classList.add("bg-slate-300")
})
sliderPoint1.addEventListener("click", (e) => {
  sliderImage1.style.transform = `translateX(0px)`;
  sliderImage2.style.transform = `translateX(0px)`;
  sliderPoint1.classList.add("bg-slate-600")
  sliderPoint2.classList.remove("bg-slate-600")
  sliderPoint2.classList.add("bg-slate-300")
})