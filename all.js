let screenHeight = window.innerHeight;
window.addEventListener("resize", () => {
  screenHeight = window.innerHeight;
  console.log(screenHeight);
});
window.addEventListener("scroll", fadeIn);
window.addEventListener("scroll", fadeOut);
function fadeIn() {
  const fades = document.querySelectorAll(".fade");
  fades.forEach((item) => {
    const delay = item.dataset.fadeDelay;
    const rectInfo = item.getBoundingClientRect();
    //物件出現一半時的高度
    const displayHeightMin = screenHeight - rectInfo.height / 2;
    const displayHeightMax = screenHeight - rectInfo.height / 3;
    if (rectInfo.y < displayHeightMax && displayHeightMin < rectInfo.y) {
      setTimeout(() => {
        item.classList.add("active");
      }, delay);
    }
  });
}
function fadeOut() {
  const fades = document.querySelectorAll(".fade.active");
  fades.forEach((item) => {
    const html = document.querySelector("html");
    const clientHeight = item.offsetTop;
    //捲過的高度 + 視窗現有高度 --> 不能讓這個高度以內出現item
    const fadeOutHeight = html.scrollTop + screenHeight;
    if (fadeOutHeight < clientHeight) {
      item.classList.remove("active");
    }
  });
}
