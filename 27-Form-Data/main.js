const form = document.getElementById('form')

function onSubmit(e) {
  console.log(e)
  e.preventDefault();

  const inputValue = document.getElementById('input').value;
  const selectValue = document.getElementById('select').value;
  const checkboxValue = document.getElementById('checkbox').checked;

  if(inputValue === '' || selectValue === '0'){
    alert('Formu doldurunuz!')
    return;
  }
}



function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form) // Gonderilen formu object e ceviriyor

  const inputValue = formData.get('input')
  const selectValue = formData.get('select')


/*Burda yaptigimiz is checkbox degeri value olarak geldiginde bu degeri checked ceviriyoruz 
ve true yada false degeri elde ediyoruz
*/
  let checkboxValue = false
  if(formData.get('checkbox') === 'on'){
    checkboxValue = true;
  }


  if(inputValue === '' || selectValue === '0'){
    alert('Formu doldurunuz!')
    return;
  }


  //3.yol entries methodu
  const entries = formData.entries()
 for(let entry of entries){
  console.log(entry)
 }

  console.log(inputValue, selectValue, checkboxValue )
}

/* form.addEventListener('submit', onSubmit) */
form.addEventListener('submit', onSubmit2)