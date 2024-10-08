//Kendisine gonderilen texti soylendiyi kadar dondurme


function printText(text, quantity){
  for(let i = 0; i < quantity; i++){
    console.log(text);
  }
}

printText("Erdem", 5)


//Function to calculate the area and perimeter of a rectangle - Bir dikdortgenin alan ve cevresini hesaplayan fonksiyon

function calculate(short, long){
  let area = short * long;
  let perimeter =  (short + long) * 2;
  return `Area: ${area} , Perimeter ${perimeter}`;
}

console.log(calculate(5,7));

//Function Heads and Tails app - Yazi tura uygulamasi;

function headsTails() {
  let random = Math.random();
  if(random < 0.5) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}

headsTails();

// Kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyon;

function findExactDivisors(number) {
  let numbers = [];
  for(let i = 2; i < number; i++){
    if(number % i == 0){
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(findExactDivisors(1580));


// Degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayiniz

function total(){
  let result = 0;
  for(let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}

let result;
result = total(10,20,34,56,76,88,16);
console.log(result);