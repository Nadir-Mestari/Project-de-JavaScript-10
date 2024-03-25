// Créer la logique de compte à rebours

const form = document.querySelector("form")

const countdownDisplay = document.getElementById("countdownDisplay")
let totalsecondes;
let interval;
function Timer() {

    let minutes = Math.floor(totalsecondes / 60);
    let secondes = totalsecondes % 60;

    let num1 = minutes < 10 ? "0" + minutes : minutes
    let num2 = secondes < 10 ? "0" + secondes : secondes

    countdownDisplay.innerText = `${num1}:${num2}`
    if (totalsecondes > 0) {
        totalsecondes--;
    } else {
        countdownDisplay.innerText = `C'est terminé !`
        clearInterval(interval)
    }


}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isNaN(choice.value)) {
        alert("le miniteur contiens seulement des chiffres")
    } else {
        totalsecondes = choice.value * 60;
        clearInterval(interval)
        interval = setInterval(Timer, 1000);
        choice.value = "";
    }



})



