var $porta;
var $stella;
var viewport = {
  height: 0,
  width: 0,
};

(function () {
  $porta = document.getElementById("porta");
  $stella = document.getElementById("stella");

  viewport = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  window.addEventListener("resize", handleResize);
  document.onmousemove = handleMouseMove;
  document.onmouseenter = handleMouseEnter;
  document.onmouseleave = handleMouseLeave;
})();

function handleResize() {
  viewport = {
    height: window.innerHeight,
    width: window.innerWidth,
  };
  resetElementsPosition();
}

function handleMouseMove(event) {
  const e = event || window.event;
  const { x, y } = cursorPositionPx2Pct(e.x, e.y, viewport);
  changeElementsPosition(x, y);
}

function handleMouseEnter() {
  resetElementsPosition();
}

function handleMouseLeave() {
  resetElementsPosition();
}

function cursorPositionPx2Pct(x, y, viewport) {
  return {
    x: (x * 100) / viewport.width,
    y: (y * 100) / viewport.height,
  };
}

function resetElementsPosition() {
  changeElementsPosition(50, 50);
}

function changeElementsPosition(xPercentage, yPercentage) {
  var newStyle =
    "translateX(" +
    (xPercentage - 50) / 2 +
    "px) translateY(" +
    (yPercentage - 50) / 2 +
    "px)";
  $porta.style.transform = newStyle;
  $stella.style.transform = newStyle;
}
