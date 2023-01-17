const clock = document.getElementById("currentTime");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}`;
  console.log(clock.innerText);
}

getClock();
setInterval(getClock, 1000);