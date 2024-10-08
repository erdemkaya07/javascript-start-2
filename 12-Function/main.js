// Fonksiyon - Function

function older(YYYY) {
  let now = new Date().getFullYear();
  return now - YYYY;
}

let result = older(1991);

console.log(result);





function narSkaBliPensionen(Year, name) {
  let olderToday = older(Year);
  let pensionAge = 65 - olderToday;

  if(pensionAge > 0) {
    console.log(`${name} : Years remaining until retirement ${pensionAge}`)
  }
  else {
    console.log("You re pension!")
  }
}

narSkaBliPensionen(1991, "Erdem");