var trenutnaSlika = 1;
var maxSlika = 5;

function Next() {
    trenutnaSlika++;
    if (trenutnaSlika > maxSlika) {
        trenutnaSlika = 1;
    }
    PromijeniSliku();
}

function Prev() {
    trenutnaSlika--;
    if (trenutnaSlika < 1) {
        trenutnaSlika = maxSlika;
    }
    PromijeniSliku();
}

function PromijeniSliku() {
    document.getElementById("slika").src = "img/slider_" + trenutnaSlika + ".jpg";
}
