
window.addEventListener("mousemove",function(details){
    let rectangle = this.document.querySelector("#rectangle");
    let x_value = gsap.utils.mapRange(
      0,
      window.innerWidth,
      100 + rectangle.getBoundingClientRect().width / 2,
      window.innerWidth - (100 + rectangle.getBoundingClientRect().width / 2),
      details.clientX
    );

    gsap.to("#rectangle", {
      left: x_value + "px",
      ease: Power3,
    });
})