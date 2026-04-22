$("#spremi").click(function (event) {

        event.preventDefault();

        var ime = $("#ime").val().trim();
        var prezime = $("#prezime").val().trim();
        var oib = $("#oib").val().trim();
        var jmbag = $("#jmbag").val().trim();
        var datum = $("#datumrodenja").val().trim();
        var adresa = $("#adresa").val().trim();
        var postanski = $("#postanski").val().trim();
        var grad = $("#grad").val().trim();

        if (ime === "" || prezime === "" || oib === "" || jmbag === "" || datum === "" || adresa === "" || postanski === "" || grad === "") {
            alert("Nisu popunjena sva polja!");
            return;
        }

        var brojRegex = /^[0-9]+$/;

        if (!brojRegex.test(oib) || !brojRegex.test(jmbag) || !brojRegex.test(postanski)) {
            alert("OIB, JMBAG i poštanski broj moraju sadržavati samo brojeve!");
            return;
        }

        var datumRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
        var match = datum.match(datumRegex);

        if (!match) {
            alert("Datum mora biti u formatu dd-mm-yyyy!");
            return;
        }

        var dan = match[1];
        var mjesec = match[2];
        var godina = match[3];

        var noviDatum = godina + "-" + mjesec + "-" + dan;

        var student = {
            ime: ime,
            prezime: prezime,
            oib: oib,
            jmbag: jmbag,
            datumRodenja: noviDatum,
            adresa: adresa,
            postanskiBroj: postanski,
            grad: grad
        };

        console.log(student);
});