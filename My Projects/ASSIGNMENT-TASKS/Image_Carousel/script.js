let images = [
"https://images.unsplash.com/photo-1763205367855-093764253663?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1761839257789-20147513121a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1764276266750-4d6316e972e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1763713518951-758e184992f8?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

];
let img = document.getElementById("image");
let next = document.getElementById("nextbtn");
let prev = document.getElementById("prebtn");
let carousel = document.getElementById("carousel");

let index = 0;
img.src = images[index];

next.addEventListener("click", ()=>{
    index = index + 1;
    if(index === images.length){
        index = 0;
    }
    img.src = images[index];
})

prev.addEventListener("click", ()=>{
    index = index-1;
    if(index<0){
        index = images.length-1;
    }
    img.src = images[index];
});

img.addEventListener("mouseenter", function () {
  clearInterval(autoSlide);
});

img.addEventListener("mouseleave", function () {
  autoSlide = setInterval(function () {
    index = index + 1;
    if (index === images.length) {
      index = 0;
    }
    img.src = images[index];
  }, 3000);
});

