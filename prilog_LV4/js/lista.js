function toggle(id) {
    var lista = document.getElementById(id);

    if (lista.style.display === "block") {
        lista.style.display = "none";
    } else {
        lista.style.display = "block";
    }
}

function prikaziSliku(src) {
    document.getElementById("slika").src = src;
}