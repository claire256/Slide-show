const images = [
    "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677337843937-d9d203ec039e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "http://source.unsplash.com/random"
]

let showingImageIndex = 0;
const imagesLength = images.length;

function goBack(){
    console.log('shooow' ,showingImageIndex)
     if (showingImageIndex === 0){
         showingImageIndex = imagesLength -1
     }
     else{
         showingImageIndex -= 1
     }
}

function goForward(){
    console.log('shooow' ,showingImageIndex)
    if(showingImageIndex === imagesLength -1){
        showingImageIndex = 0
    }
    else{
      showingImageIndex += 1
    }
}