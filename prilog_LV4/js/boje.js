function GetHexa() {
    var Element = "0123456789abcdef";
    var Hexa = "#";

    for (var i = 0; i < 6; i++) {
        Hexa += Element[Math.floor(Math.random() * 16)];
    }
    return Hexa;
}

function GetRGB() {
    var prva = Math.floor(Math.random() * 256);
    var druga = Math.floor(Math.random() * 256);
    var treca = Math.floor(Math.random() * 256);
    return "rgb(" + prva + ", " + druga + ", " + treca + ")";
}

function GetPredefined() {
    var Element = ["yellow", "green", "orangered", "blue", "purple", "pink", "cyan"];
    return Element[Math.floor(Math.random() * Element.length)];
}

function GetColor() {
    var Element = ["hexa", "rgb", "predefined"];
    var Odabir = Element[Math.floor(Math.random() * Element.length)];

    if (Odabir === "hexa") return GetHexa();
    if (Odabir === "rgb") return GetRGB();
    return GetPredefined();
}

document.getElementById("btn").addEventListener("click", function () {
    var boja = GetColor();
    document.body.style.backgroundColor = boja;
    document.getElementById("imeBoje").textContent = "Boja: " + boja;
});