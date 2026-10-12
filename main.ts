const sachovnica = document.getElementById("sachovnica")!;

sachovnica.style.display = "grid";
sachovnica.style.gridTemplateColumns = "repeat(8, 60px)";
sachovnica.style.width = "480px";
sachovnica.style.border = "2px solid black";

for (let riadok = 0; riadok < 8; riadok++) {
for (let stlpec = 0; stlpec < 8; stlpec++) {
const pole = document.createElement("div");

    pole.style.width = "60px";
    pole.style.height = "60px";

    if ((riadok + stlpec) % 2 === 0) {
        pole.style.backgroundColor = "white";
    } else {
        pole.style.backgroundColor = "black";
    }

    sachovnica.appendChild(pole);
}

}