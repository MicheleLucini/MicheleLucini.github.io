var $content;
var $porta;
var $stella;
var viewport = {
  height: 0,
  width: 0,
};

(function () {
  $content = document.getElementById("content");
  $porta = document.getElementById("porta");
  $stella = document.getElementById("stella");

  updateViewportMeasurements();
  setContentMinHeight();

  window.addEventListener("resize", handleResize);
  document.onmousemove = handleMouseMove;
  document.onmouseenter = handleMouseEnter;
  document.onmouseleave = handleMouseLeave;
})();

function updateViewportMeasurements() {
  viewport = {
    height: window.innerHeight,
    width: window.innerWidth,
  };
}

function setContentMinHeight() {
  $content.style.minHeight = viewport.height - 100 + "px";
}

function handleResize() {
  updateViewportMeasurements();
  resetElementsPosition();
  setContentMinHeight();
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
  var xVariationPx = (xPercentage - 50) / 2;
  var yVariationPx = (yPercentage - 50) / 2;

  // default transform: translateX(-200px) translateY(120px);
  $porta.style.transform = getNewStyle(-200 + xVariationPx, 120 + yVariationPx);
  // default transform: translateX(180px) translateY(-300px);
  $stella.style.transform = getNewStyle(
    180 + xVariationPx,
    -300 + yVariationPx
  );
}

function getNewStyle(x, y) {
  return "translateX(" + x + "px) translateY(" + y + "px)";
}
