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

  document.querySelector("#countdown").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`
}
//calls the function every second to render the numbers
const timer = setInterval(updateCountdown, 1000);
updateCountdown();