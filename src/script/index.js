let button = document.getElementById("offerButton");
let close = document.querySelector(".close");
let arrow = document.querySelector(".footer-wraper__arrow");
let t;
console.log(arrow)

function overlayActive(e) {
  e.preventDefault()
  let overlay = document.querySelector(".overlay")
  overlay.classList.add("active");
  console.log(overlay)
}

function closeOverlay() {
  let overlay = document.querySelector(".overlay")
  overlay.classList.remove("active")
}

button.addEventListener("click", overlayActive);
close.addEventListener("click", closeOverlay);
arrow.addEventListener("click", lightScroll)

function lightScroll() {
  let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    t = setTimeout("lightScroll()", 10);
  } else clearTimeout(t)
  return false
}
