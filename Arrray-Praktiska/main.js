let frukter = ['Banan', 'Mellon', 'Kivi', 'Citron'];

let frukterLeght = frukter.length;

let result;

console.log(frukter);
console.log(frukter.length);
console.log(frukterLeght);
console.log(frukter[0],frukter[3]);


result = frukter.includes('Mellon');
result = frukter.push('Jorgubb');
result = frukter.splice(3,2)

console.log(result);
console.log(frukter);


let students = [
  {name: 'Yigit Bilgi', dt: 2010, notlar: [60, 75, 34] },
  {name: 'Ada Bilgi', dt: 2012, notlar: [60, 32, 66] },
  {name: 'Cinar Turan', dt: 2014, notlar: [60, 88, 66] },
]

console.log(students);

console.log(2024 - students[0].dt );
console.log(2024 - students[1].dt );
console.log(2024 - students[2].dt );


let student1note= students[0].notlar[0] + students[0].notlar[1] + students[0].notlar[2];
let studentNoteResult = student1note / 3;
console.log(`Ogrenci ${students[0].name}nin not orlamasi ${studentNoteResult.toFixed(2)}'tur`);


let student2note= students[1].notlar[0] + students[1].notlar[1] + students[1].notlar[2];
let student2NoteResult = student2note / 3;
console.log(`Ogrenci ${students[1].name}nin not orlamasi ${student2NoteResult.toFixed(2)}'tur`);

let student3note= students[2].notlar[0] + students[2].notlar[1] + students[2].notlar[2];
let student3NoteResult = student3note / 3;
console.log(`Ogrenci ${students[2].name}nin not orlamasi ${student3NoteResult.toFixed(2)}'tur`)