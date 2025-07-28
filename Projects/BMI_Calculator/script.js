const form = document.querySelector('form') 
//this usecase will give you empty value
//  const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', (e)=>{
  e.preventDefault(); // reset all the default event of form
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')


  if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = 'please give a valid height'
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = 'please give a valid weight'
  }
  else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    let res;
    if(bmi < 18.6) res = "Under Weight"
    else if(bmi > 24.9) res = "OverWeight Weight"
    else res = "Normal range"
    // show the result
    results.innerHTML = `<span>${bmi} <br> result: 
    ${res}
    </span>`;
  }

})
