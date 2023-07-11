// var $hours;
// var $minutes;
// var $seconds;
// var $content;

// (function () {
//   clockInitialize();

//   $content = document.getElementById("content");
//   setContentMinHeight();
//   window.addEventListener("resize", handleResize);
// })();

// function clockInitialize() {
//   $hours = document.getElementById("hours");
//   $minutes = document.getElementById("minutes");
//   $seconds = document.getElementById("seconds");

//   clockUpdate();

//   setTimeout(clockUpdate, 100);
// }

// function clockUpdate() {
//   let today = new Date();
//   let s = today.getSeconds(); // 0 - 59
//   let m = today.getMinutes(); // 0 - 59
//   let h = (today.getHours() % 12) + m / 59; // 22 % 12 = 10pm

//   s *= 6; // 60 * 6 = 360deg
//   m *= 6;
//   h *= 30; // 12 * 30 = 360deg

//   $seconds.style.transform = `rotate(${s}deg)`;
//   $minutes.style.transform = `rotate(${m}deg)`;
//   $hours.style.transform = `rotate(${h}deg)`;

//   setTimeout(clockUpdate, 500);
// }

// function setContentMinHeight() {
//   $content.style.minHeight = window.innerHeight - 100 + "px";
// }

// function handleResize() {
//   setContentMinHeight();
// }
