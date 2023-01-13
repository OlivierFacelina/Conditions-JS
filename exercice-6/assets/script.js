// On déclare une variable avec demande de saisie

let int = parseInt(window.prompt("Saisir un nombre correspondant à la force d'un séïsme"))

switch (InputEvent) {
    // Cas où la force est de 1
    case (int == 1): {
        alert("Micro-tremblement de terre, non ressenti");
        break;
    }
    // Cas où la force est de 2
    case (int == 2): {
        alert("Très mineur. Non ressenti mais détecté");
        break;
    }
    // Cas où la force est de 3
    case (int == 3): {
        alert("Mineur. Causant rarement des dommages");
        break;
    }
    // Cas où la force est de 4
    case (int == 4): {
        alert("Leger. Secousses notables d'objets à l'intérieur des maisons");
        break;
    }
    // Cas où la force est de 5
    case (int == 5): {
        alert("Modéré. Légers dommages aux édifices bien construits");
        break;
    }
    // Cas où la force est de 6
    case (int == 6): {
        alert("Fort. Destructeur dans des zones allant jusqu'à 180 kilomètres à la ronde si elles sont peuplées");
        break;
    }
    // Cas où la force est de 7
    case (int == 7): {
        alert("Majeur. Dommages modérés à sévères dans des zones plus vastes.");
        break;
    }
    // Cas où la force est de 8
    case (int == 8): {
        alert("Important. Dommages sérieux dans des zones à des centaines de kilomètres à la ronde");
        break;
    }
    // Cas où la force est de 9
    case (int == 9): {
        alert("Dévastateur. Dévaste des zones sur des milliers de kilomètres à la ronde");
        break;
    }
    // Cas où l'utilisateur saisit hors échelle
    default:
        alert("Hors échelle")
}
