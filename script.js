const container = document.querySelector(".container")
console.log('cont', container)
container.style.backgroundImage =`url(${images[0]})` 

const previous = document.querySelector("button.previous");
const next = document.querySelector("button.next");

function displayImage(){
    container.style.backgroundImage = `url(${images[showingImageIndex]})`
}
// displayImage()
previous.addEventListener("click", 
function(){
  goBack()
  displayImage()
});
next.addEventListener("click", 
function(){
  goForward()
  displayImage()
});

setInterval(function(){
  goForward()
  displayImage()
},1000)