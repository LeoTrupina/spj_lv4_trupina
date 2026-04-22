var gumbDodaj = document.getElementById("dodaj");

gumbDodaj.addEventListener("click", function (e) {
    e.preventDefault();
    Dodaj();
});

function Dodaj() {
    var ul = document.getElementById("lista");
    var tekst = document.getElementById("novo").value;

    if (tekst.trim() === "") {
        alert("Ne smije se dodati prazna kućica!");
    } else {
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var span = document.createElement("span");
        span.textContent = tekst;

        var deleteBtn = document.createElement("span");
        deleteBtn.textContent = " 🗑️";

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(deleteBtn);
        li.appendChild(span);

        ul.appendChild(li);

        document.getElementById("novo").value = "";
    }
}

document.getElementById("lista").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
