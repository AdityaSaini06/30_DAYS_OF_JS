
let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel" , (e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY ;
    scrollContainer.style.scrollBehavior = "auto";

});

nextbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
    
});

backbtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});