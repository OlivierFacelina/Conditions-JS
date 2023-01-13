// On déclare une variable avec demande de saisie

let weight = Number(window.prompt("Saisir l'indice de masse corporelle d'une personne"));
let height = Number(window.prompt("Saisir la taille d'une personne"));

// Calcul de l'IMC
imc = weight / height**2;
console.log(imc)

// Si imc inférieur à 16.5
if(imc < 16.5) {
    console.log("Dénutrition");
}
// Si imc inférieur à 18.5
else if (imc < 18.5) {
    console.log("Maigreur");
}
// Si imc inférieur à 25
else if (imc < 25) {
    console.log("Corpulence normale");
}
// Si imc inférieur à 30
else if(imc < 30) {
    console.log("Surpoids");
}
// Si imc supérieur à 30
else if(imc > 30) {
    console.log("Obésité");
}