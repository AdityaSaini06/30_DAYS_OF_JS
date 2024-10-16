let cursordiv = document.getElementById("cursor-div");

const move = (e) => {
  let x = e.pageX || e.touches[0].pageX;
  let y = e.pageY || e.touches[0].pageY;

  cursordiv.style.left = `${x}px`;
  cursordiv.style.top = `${y}px`;
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

document.addEventListener("touchmove", (e) => {
  move(e);
});
