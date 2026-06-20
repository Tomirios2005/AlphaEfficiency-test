const targetDate = new Date("2026-06-30T23:59:59").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector("#countdown").innerHTML = "Oferta finalizada";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#countdown").innerHTML = `
  <div class="time-block">
    <span class="label">Days</span>
    <div class="number">${days}</div>
  </div>
  <div class="time-block">
    <span class="label">Hours</span>
    <div class="number">${hours}</div>
  </div>
  <div class="time-block">
    <span class="label">Minutes</span>
    <div class="number">${minutes}</div>
  </div>
  <div class="time-block">
    <span class="label">Seconds</span>
    <div class="number">${seconds}</div>
  </div>
`;
}
//calls the function every second to render the numbers
const timer = setInterval(updateCountdown, 1000);
updateCountdown();