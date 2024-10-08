let sifra = 80;

// exempel 1

if(sifra > 50) {
  console.log("över 50")
} else {
  console.log("under 50")
}


//exempel 2 

if(sifra >= 50 && sifra < 100) {
  console.log("Siffran är ett tal mellan 50 och 100")
} else {
  console.log("Siffran är inte ett tal mellan 50 och 100")
}


//exempel 3

if(sifra % 2 == 0 && sifra >0) {
  console.log("Siffran är ett positivt, jämnt tal.")
} else {
  console.log("Siffran är inte ett positivt, jämnt tal.")
}

/* (sifra % 2 == 0 && sifra >0) 

degiskende ki sayinin 2ye bolumunden kalan 0 ise bu bir cift sayidir. ve sayi 0 dan buyuksa positif bir sayidr.

*/


// exempel 4

let x = 10, y=50, z=30;

if(x > y && x > z) {
  console.log("X är det största talet");
}
else if(y > x && y > z) {
  console.log("Y är det största talet");
}
else if(z > x && z > y) {
  console.log("Z är det största talet");
}


let prov1= 50;
let prov2= 60;
let final= 70;

let provResult = ((prov1 + prov2) /2) * 0.4 + (final * 0.6);

console.log(provResult);

if(provResult >= 50) {
  console.log("Godkänn");
} else {
  console.log("Inte godkänn");
}

// 

if(provResult >= 50 && final >= 50) {
  console.log("Godkänn");
} else {
  console.log("Inte godkänn");
}
 //

if(provResult >= 50 || final >= 70) {
  console.log("Godkänn");
} else {
  console.log("Inte godkänn");
}