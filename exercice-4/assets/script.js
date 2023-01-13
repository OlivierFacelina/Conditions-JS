// On déclare une variable avec demande de saisie

let int = window.prompt("Veuillez saisir un entier")

// On définit la variable modulo pour savoir si le nombre est pair ou non
modulo = int % 2;

// Si le reste de la division == 0, alors nombre pair. Sinon, impair
if (modulo == 0) {
    alert("Le nombre est pair")
}
else {
    alert("Le nombre est impair")
}