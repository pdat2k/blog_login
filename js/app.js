window.addEventListener("load", function () {
  const wrapper = this.document.getElementById("wrapper");
  const menu = wrapper.querySelector(".header-container");
  menu.classList.toggle("sticky-active");
});

window.addEventListener("scroll", function () {
  const wrapper = this.document.getElementById("wrapper");
  const menu = wrapper.querySelector(".header-container");
  const screen = this.window.scrollY;

  if (screen <= 120) {
    menu.classList.remove("sticky");
    menu.classList.add("sticky-active");
  } else {
    menu.classList.remove("sticky-active");
    menu.classList.remove("sticky");
    this.setTimeout(() => {
      menu.classList.add("sticky");
    }, 300);
  }
});
