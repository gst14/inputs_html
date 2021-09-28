const color = document.querySelector("#color");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const datetime = document.querySelector("#datetime_local");
const range = document.querySelector("#range");
const month = document.querySelector("#month");
const week = document.querySelector("#week");

const inputs = [color, date, time, datetime, range, month, week];

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    let span = document.querySelector(`#${input.id}_span`);
    span.innerHTML = `Value: ${e.target.value}`;
  });
});
