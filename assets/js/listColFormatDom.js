/* 
// handles the color formats in the options
// Shows the selected option
// Hides the options not selected
*/

document.querySelectorAll('input[name="inlineRadioOptions"]').forEach(function(elem){
  elem.addEventListener('click', function(e){
    //handles the hide-block classes for the clicked element
    // shows the selected item
    const val = e.target.value
    document.getElementById(val).checked = true
    document.getElementById(val).classList.remove('d-none')
    document.getElementById(val).classList.add('d-block')

    //handles the hide-block classes for the elements not clicked
    document.querySelectorAll('input[name="inlineRadioOptions"]').forEach(function(elem2){
    //if items dont match hide them
      if(elem !== elem2){
        document.getElementById(elem2.id).check = false
        document.getElementById(elem2.value).classList.remove('d-block')
        document.getElementById(elem2.value).classList.add('d-none')
      }
    })

  })
})