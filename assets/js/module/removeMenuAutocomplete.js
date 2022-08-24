export function removeMenuAutocomplete() {
  let country = document.querySelectorAll("li");
  for (let element of country) {
    element.remove();
  }
}
