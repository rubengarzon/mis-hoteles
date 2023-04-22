export function uiSearchFilters() {
  const $rooms = document.querySelector("#rooms");
  const $rooms__icon = document.querySelector("#rooms__icon");
  const $rooms__icon__close = document.querySelector("#rooms__icon__close");
  const $rooms__icon__block = document.querySelector("#rooms__icon__block");

  $rooms.addEventListener("click", function () {
    if ($rooms__icon.classList.contains("hidden")) {
      $rooms__icon.classList.remove("hidden");
      $rooms__icon__close.classList.add("hidden");
    } else {
      $rooms__icon.classList.add("hidden");
      $rooms__icon__close.classList.remove("hidden");
    }
    if ($rooms__icon__block.classList.contains("hidden")) {
      $rooms__icon__block.classList.remove("hidden");
    } else {
      $rooms__icon__block.classList.add("hidden");
    }
  });
}
