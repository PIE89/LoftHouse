function mobileNav() {
  const navBtn = document.querySelector("#mobile-btn");
  const nav = document.querySelector("#mobile-nav");

  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("nav__btn-mobile--active");
    nav.classList.toggle("mobile-nav--active");
  });
}

export default mobileNav;
