const MENULINKS = document.querySelectorAll(".menu-nav > a");

MENULINKS.forEach((link) => {
  link.addEventListener("click", () => {
    MENULINKS.forEach((element) => {
      element.classList.remove("active");
    });

    link.classList.add("active");
  });
});
