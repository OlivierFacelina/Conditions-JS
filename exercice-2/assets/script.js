// On déclare une variable avec demande de saisie

let yearsOld = window.prompt("Saisir votre âge")

// Si l'âge est compris entre 1 et 6
if (yearsOld >= 1 && yearsOld <= 6) {
    console.log("Vous êtes un jeune enfant")
}

// Si l'âge est compris entre 7 et 11
else if (yearsOld >= 7 && yearsOld <= 11) {
    console.log("Vous êtes un enfant qui a atteint l'âge de raison.")
}

// Si l'âge est compris entre 12 et 17
else if (yearsOld >= 12 && yearsOld <= 17) {
    console.log("Vous êtes un adolescent.")
}

// Si l'âge est compris entre 18 et 120
else if (yearsOld >= 18 && yearsOld <= 120) {
    console.log("Vous êtes un adulte.")
}