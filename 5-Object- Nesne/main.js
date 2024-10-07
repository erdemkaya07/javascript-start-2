let bestallning1 = [
  {id: 101,
  date:31/12/2025,
  metod: "Kort", 
  address: "Ängelholm",
  product1:  {
    productid: 5,
    productTitle: "iPhone 11",
    productURL: "www.abc.xom",
    productPrice: 7500,
  },
  product2: {
    productid: 3,
    productTitle: "iPhone 12",
    productURL: "www.abc.xom",
    productPrice: 7400,
  },
  kundId: 12,
}];

let bestallning2 = [
  {id: 120,
  date:31/12/2025,
  metod: "Kort", 
  address: "Ängelholm",
  product1:  {
    productid: 5,
    productTitle: "iPhone 11",
    productURL: "www.abc.xom",
    productPrice: 10000,
  },
  product2: {
    productid: 3,
    productTitle: "iPhone 12",
    productURL: "www.abc.xom",
    productPrice: 10000,
  },
  kundId: 13,
}];

let bestallningar = [bestallning1 , bestallning2]

productTax1 = ((bestallning1[0].product1.productPrice) + (bestallning1[0].product2.productPrice)) * 0.20 ;
product1Total = ((bestallning1[0].product1.productPrice) + (bestallning1[0].product2.productPrice)) + productTax1;
productTax2 = ((bestallning2[0].product1.productPrice) + (bestallning2[0].product2.productPrice)) * 0.20 ;
product2Total = ((bestallning2[0].product1.productPrice) + (bestallning2[0].product2.productPrice)) + productTax2;
/* productTaxTotal = productTax + bestallning1[0].product1.productPrice
 */
/* console.log(bestallningar) */

console.log(`Birinci urunun vergi orani ${productTax1}`)
console.log(`Birinci urunun toplam fiyati ${product1Total}`)

console.log(`Ikinic urunun vergi orani ${productTax2}`)
console.log(`Ikıncı urunun toplam fiyati ${product2Total}`)
/* console.log(productTaxTotal) */