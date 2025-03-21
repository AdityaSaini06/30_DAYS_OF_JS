const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

// console.log(today);
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.textContent = (today.getDate()<10 ? "0" : "") + today.getDate();
day.textContent=weekDays[today.getDay()];
month.textContent=monthNames[today.getMonth()];
year.textContent=today.getFullYear();