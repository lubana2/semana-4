import humanize from  "./scripts/humanize.js"


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// const $date = document.querySelector("#date");
// console.log($date.value)
const $dates = document.querySelector("#humanizedDateId");
let humanizedDate = humanize("2023-04-15T15:16:28-05:00");
humanizedDate = capitalize(humanizedDate);
$dates.textContent = humanizedDate;

