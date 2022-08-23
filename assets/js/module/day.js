/**variables use to display the day of the following week */
let date = new Date();
let jours = new Array(
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
);
let tomorow = date.getDay() + 1;

export { date, jours, tomorow };
