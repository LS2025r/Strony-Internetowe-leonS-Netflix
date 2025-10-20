document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".arrow");
  const menu = document.getElementById("smallmainMenu");

  if (!arrow || !menu) {
    console.warn("arrow or small menu not found in DOM");
    return;
  }

  // funkcje na pokazanie i ukrycie menu
  function showMenu() {
    menu.classList.add("show");
    menu.setAttribute("aria-hidden", "false");
    arrow.classList.add("rotated"); // rotacja strzałki
  }

  function hideMenu() {
    menu.classList.remove("show");
    menu.setAttribute("aria-hidden", "true");
    arrow.classList.remove("rotated"); // przywrócenie strzałki do pierwotnego stanu
  }

  // pokaz menu przy najechaniu na strzałkę
  arrow.addEventListener("mouseenter", showMenu);

  // gdy strzalka na menu ciagle pokazuje
  menu.addEventListener("mouseenter", showMenu);

  // kiedy mysz opuszcza strzałkę, ukryj menu jeśli mysz nie jest nad menu
  arrow.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menu.matches(":hover") && !arrow.matches(":hover")) hideMenu();
    }, 100);
  });

  // kiedy mysz opuszcza menu, ukryj je
  menu.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menu.matches(":hover") && !arrow.matches(":hover")) hideMenu();
    }, 100);
  });

  // obsługa klawiatury dla dostępności
  arrow.addEventListener("focus", showMenu);
  arrow.addEventListener("blur", () => {
    setTimeout(() => {
      if (!menu.matches(":focus") && !arrow.matches(":focus")) hideMenu();
    }, 100);
  });

  // ukryj menu po naciśnięciu klawisza Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideMenu();
  });
});
