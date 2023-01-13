// On déclare une variable avec demande de saisie

let weather = window.prompt("Il pleut ou il fait beau ?")
let weather2 = window.prompt ("Il fait chaud ou il fait froid ?")


// S'il fait beau et chaud
if (weather == 'Il fait beau' && weather2 == 'Il fait chaud') {
    alert("Porter un short")
}

// S'il pleut et chaud
else if (weather == 'Il pleut' && weather2 == 'Il fait chaud') {
    alert("Prendre un parapluie")
}

// S'il pleut et froid
else if (weather == 'Il pleut' && weather2 == 'Il fait froid') {
    alert("Prendre un manteau à capuche")
}