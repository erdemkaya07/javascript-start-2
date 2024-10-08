/* let numbers = [3,5,7,8,12,23,45,66]; */

// her bir sayinin karesi 

/* for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i] * numbers[i]);
} */


//hangi sayilar 5in kati
/* for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 5 == 0) {
    console.log(numbers[i])
  }
} */


//50 ila 100 arasinda ki sayilari azalan sekilde

/* for(let i = 100; i > 50; i--){
  console.log(i)
}
 */


// urunler listesinde ki tum urunleri buyuk harfe cevir

let produkts = ["iphone16", "samsung s25", "iphone18", "samsung s22"];

/* console.log(produkts); */

for(i = 0; i < produkts.length; i++){
  console.log(produkts[i].toUpperCase());
}

//urunler listesinde samsung kelimesi gecen kac kelime vardir
let total = 0;
for(i = 0; i < produkts.length; i++){
  if(produkts[i].includes("samsung")){
    total++;
    console.log(produkts[i])
  }
}
console.log(total + " st har hittat")

let students =[
  {ad: "Erdem", soyad:"Kaya", point: [40,80,50]},
  {ad: "Aylin", soyad:"Kaya", point: [80,50,80]},
  {ad: "Elsa", soyad:"Kaya", point: [70,70,80]},
]

let TotalClassAverage = 0;


for(let i = 0; i < students.length; i++) {
  let pointTotal = 0;
  let quantity = 0;
  let average = 0;
  let godkand = "";
  for(let x = 0; x < students[i].point.length; x++) {
    pointTotal += students[i].point[x];
    quantity++;
  }
  average = pointTotal / quantity; //Ortalama
  
  TotalClassAverage += average; //Sinifin toplam puani

  if(average >= 50){
    godkand = "Godkänd!";
  }else {
    godkand = "Inte Godkänd";
  }

  console.log(`${godkand} : ${students[i].ad}${students[i].soyad} 's quantity ${average.toFixed(2)}'tur`);

}

console.log("Class average: " + (TotalClassAverage / students.length))

