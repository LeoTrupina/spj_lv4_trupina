var tecaj = {
    USD: { EUR: 0.85, GBP: 0.72, JPY: 113.54, AUD: 1.32 },
    EUR: { USD: 1.07, GBP: 0.86, JPY: 133.89, AUD: 1.55 },
    GBP: { USD: 1.39, EUR: 1.18, JPY: 157.04, AUD: 1.82 },
    JPY: { USD: 0.0088, EUR: 0.0075, GBP: 0.0064, AUD: 0.012 },
    AUD: { USD: 0.76, EUR: 0.65, GBP: 0.55, JPY: 83.75 }
};

document.getElementById("pretvori").addEventListener("click", function () {

    var iznos = parseFloat(document.getElementById("iznos").value);
    var izValute = document.getElementById("izValute").value;
    var uValutu = document.getElementById("uValutu").value;

    if (isNaN(iznos)) {
        alert("Unesite broj");
        return;
    }

    var rezultat;

    if (izValute === uValutu) {
        rezultat = iznos;
    } else {
        rezultat = iznos * tecaj[izValute][uValutu];
    }

    document.getElementById("rezultat").value = rezultat.toFixed(2);
});