
const speed = 10;

const moveBackground = () => {
  let mouseXPos = event.x / window.innerWidth * 100;
  let mouseYPos = event.y / window.innerHeight * 100;
  document.getElementById("text").style.backgroundPosition = `${mouseXPos / speed}% ${mouseYPos / speed}%`;
};

document.
getElementById("wrapper").
addEventListener("mousemove", moveBackground);

