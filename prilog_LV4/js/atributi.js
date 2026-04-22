document.getElementById("atribut").addEventListener("change", function () {
    document.getElementById("element").type = this.value;
});

function spremi() {

    var atribut = document.getElementById("atribut").value;
    var element = document.getElementById("element").value;

    if (element.trim() === "") {
        alert("Unesite vrijednost!");
        return;
    }

    var noviAtribut = {
        element: element,
        atribut: atribut
    };

    let podaci = JSON.parse(localStorage.getItem("atributi")) || [];

    podaci.push(noviAtribut);

    localStorage.setItem("atributi", JSON.stringify(podaci));

    console.log(noviAtribut);
}