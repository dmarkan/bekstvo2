function forma() {

var x = document.querySelector("#sef input").value;
if(x === "0312") {
alert("Sef je otključan, sad se iznad ventilatora bolje vidi");
} else {
alert("Pogrešna šifra");
}
}

function forma2() {

var x = document.querySelector("#sat input").value;
if(x === "12:30") {
alert("Smanji prozor browsera od donje desne ivice ekrana do donje desne ivice sefa i refreshuj stranu da bi otključao vrata");
} else {
alert("Probaj ponovo sa : izmedju");
}
}

var x = window.innerWidth;
var y = window.innerHeight;
if(x <= 820, y <= 520) {
alert("Vrata su se otključala");
alert("KRAJ");
} else {
alert("Pokušaj ponovo");
}

