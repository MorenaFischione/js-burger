
console.log("ciao");



// Il programma dovrà consentire di calcolare il prezzo del panino
//selezionando o deselezionando gli ingredienti.



// A) Imposto un prezzo base del mio panino a cui aggiungere l'extra
//    diamo spazio ad un nome
// B) Stabiliamo quanti e quali elementi aggungere
// C) Stabilisco il valore
// D) logica nella selezione e calcolo tot
// E) calcolo della logica
// F) calcolo sconto 


let prezzoBase;

let listaCoupon = ["FESTAPERDONANZA", "CLUBARRAMPICATA", "CLUBATTITUDE"]

let nomePaninoElement = document.getElementById("nome-panino");

let bottone = document.getElementById("btn");

bottone.addEventListener("click",
function() {
    if (nomePaninoElement.value.length === 0) {
        alert=("devi inserire il nome del panino");
    } else {
        let prezzoBase = 10;
        let ingredientiElement = document.getElementsByClassName("ingredienti");

        for (let i = 0; i < ingredientiElement.length; i++) {
            let ingredienteAttuale = ingredientiElement[i];
            
            if (ingredienteAttuale.checked == true) {
                prezzoBase += 5;
            }
        }
        

        let coupon = document.getElementById("coupon");

        if (coupon.value.length > 0) {
            if (listaCoupon.includes(coupon.value)) {
                prezzoBase = prezzoBase * 0.8;
            }
        }

        console.log(prezzoBase);
        
        let totale = document.getElementById("somma");
        totale.innerHTML = prezzoBase + "&euro;";

    }
});
