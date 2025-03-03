
function calcDamageA(damage) {
    damage = redASuccess.value - greenBSuccess.value;
    charBlife.value = charBlife.value - damage;
    console.log(damage)
}