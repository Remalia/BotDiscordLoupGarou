const emojis = require("./emojis.json");

//Tire l'émoji de vote suivant
const tirePlus=() => {
    emojichoise += 1;
    return emojis[`${String(emojichoise)}`]
}

module.exports = {
    tirePlus,
}