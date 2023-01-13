// On déclare une variable avec demande de saisie

let total = window.prompt("Montant total d'achats")

// // Si le montant d'achats est supérieur à 150
// if (total >= 150) {
//     // Calcul de la remise
//     remise = 15/100 * total
//     // Si la remise est supérieure à 100, alors la remise vaudra 100€
//     if (remise > 100) {
//         remise = 100
//     }
//     // On actualise le prix après remise
//     total = total - remise
// }
// else {
//     alert(`Vous devez donc payer ${total} euros`)
// }
// alert(`Votre montant à régler est de : ${total} avec une remise de ${remise}`)

// 2e cas :

// Calcul de la remise
remise = 15%100 * total;
// Si la remise est supérieure à 100, alors la remise vaudra 100€
if (remise > 100) {
    remise = 100;
}

switch (true) {
    // Cas où le montant est supérieur à 150
    case total >= 150:
        total = total - remise
        console.log(`Votre montant à régler est de ${total}. Vous avez une remise de ${remise}`);
        break;
    default:
        console.log(`Votre montant à régler est de ${total}`);
        break;
}
