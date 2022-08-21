var bomb = Math.floor(Math.random()*9)
var rainbowTreasure = Math.floor(Math.random()*9)

if (rainbowTreasure === bomb) {
  bomb = Math.floor(Math.random()*9)
}
console.log(rainbowTreasure, bomb)
const treasure = (location) => {
  if (location === bomb) {
    document.getElementById("outcome").innerHTML = "💣"
    alert ("This is a bomb, degenerate human.");
    document.getElementById("turtle").innerHTML = ""
  } else if (location === rainbowTreasure) {
    document.getElementById("outcome").innerHTML = "💰"
    alert ("This is a treasure");
    document.getElementById("turtle").innerHTML = ""
  } else if (rainbowTreasure !== location && bomb !== location) {
    document.getElementById(location).innerHTML = "🦜"
  }
  }


// Cat = rainbow icon
// Dog= bomb icon
// Turtle = turtle icon
