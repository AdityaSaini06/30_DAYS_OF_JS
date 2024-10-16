
let rectangle = document.getElementById("center");

rectangle.addEventListener("mousemove",function(details){
    let rectangleLocation = rectangle.getBoundingClientRect();
    let insideRectangleValue = details.clientX - rectangleLocation.left;
    if(insideRectangleValue < rectangleLocation.width/2){
            let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectangleValue);
            gsap.to(rectangle , {
                backgroundColor : `rgb(${redColor},0,0)`,
                ease : Power4,
            });
    }
    else {
            let blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255 , insideRectangleValue);
            gsap.to(rectangle , {
                backgroundColor : `rgb(0,0,${blueColor})`,
                ease : Power4,
            });
    }
});

rectangle.addEventListener("mouseleave" , function(){
        gsap.to(rectangle, {
            backgroundColor : "white"
        })
  
})

