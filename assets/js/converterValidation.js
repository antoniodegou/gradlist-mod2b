import * as convert from 'color-convert'
import keys from '/assets/js/cssKeywordFeed'

/* __________
-- COLOUR CONVERTER FORM VALIDATION and CONVERTER AS TYPED --
__________ */ 

document.querySelectorAll(".converter").forEach(function(elem) {
    const hex = document.getElementById('hex_code');
    const rgb = document.getElementById('rgb');
    const hsl = document.getElementById('hsl');
    const cssOption = document.getElementById('CSScolours');

    if(elem.id !== 'mypick'){
      elem.addEventListener('keyup', function(e){
      e.preventDefault();
      let input =  e.target;
      submit.setAttribute("disabled", "");
      if(input.id == 'hex_code'){
       if(validateColours([input])){
        coloursConverter([input, 'rgb', 'hsl', 'CSScolours', 'myPick'])
        validateColours([rgb, hsl, cssOption])
       } else{
        invalidateOtherFields(['rgb', 'hsl','cssKey'], input)
        validateColours([rgb, hsl, cssOption])
        input.focus({ focusVisible: true })
       }
      }
      if(input.id == 'rgb'){
        if(validateColours([input])){
          coloursConverter([input, 'hex_code', 'hsl', 'CSScolours', 'myPick' ])
          validateColours([hex, hsl, cssOption])
        }else{
          invalidateOtherFields([ 'hex', 'hsl', 'cssKey'], input)
          validateColours([hex, hsl, cssOption])
          input.focus({ focusVisible: true })
        }
      }
      if(input.id == 'hsl'){
        if(validateColours([input])){
          coloursConverter([input, 'hex_code', 'rgb', 'CSScolours', 'myPick' ])
          validateColours([hex_code, rgb, cssOption ])
        }else{
          invalidateOtherFields(['hex', 'rgb', 'cssKey'], input)
          validateColours([hex_code, rgb, cssOption ])
          input.focus({ focusVisible: true })
        }
      }
      if(input.id == 'CSScolours'){
        if( validateColours([input])){
          coloursConverter([input, 'hex_code', 'rgb', 'hsl', 'myPick' ])
          validateColours([hex_code, rgb, hsl])
        }else{
          invalidateOtherFields(['hex', 'rgb', 'hsl'], input)
          validateColours([hex_code, rgb, hsl])
          input.focus({ focusVisible: true })
        }
      }
   })
   }else{
     elem.addEventListener('change', function(e){
      let input =  e.target;
      submit.setAttribute("disabled", "");
      if(input.id == 'mypick'){
        coloursConverter([input])
        validateColours([hex_code, rgb, hsl, cssOption ])
      }
    })
  }
})



const invalidateOtherFields = (inval, input) => {
    const hex = document.getElementById('hex_code');
    const rgb = document.getElementById('rgb');
    const hsl = document.getElementById('hsl');
    const cssOption = document.getElementById('CSScolours');

    // check if values are on inVal and turn the input value to 'no!'
    inval.includes('hex') &&  (hex.value = hex == input ? document.getElementById('hex_code').value : 'no')
    inval.includes('rgb') && (rgb.value = rgb == input ? document.getElementById('rgb').value  : 'no')
    inval.includes('hsl') && (hsl.value = hsl == input ? document.getElementById('hsl').value  : 'no')
    inval.includes('cssKey') && ( cssOption.value = cssOption == input ? document.getElementById('CSScolours').value : 'no!')
}


const coloursConverter = (inputs) => {
    const hex = document.getElementById('hex_code');
    const rgb = document.getElementById('rgb');
    const hsl = document.getElementById('hsl');
    const cssOption = document.getElementById('CSScolours');
    const colorPicker = document.getElementById('mypick');



  inputs.forEach((input) => {
    if(input.id == 'hex_code'){
      rgb.value = convert.hex.rgb(input.value).toString() // convert to rgb
      hsl.value = convert.hex.hsl(input.value).toString() // convert to hsl
      colorPicker.value =  "#" + convert.rgb.hex(document.getElementById('rgb').value.split(',').map(Number)).toString() // make sure if accepts hex short form
      cssOption.value = convert.hex.keyword(input.value) // convert to CSS keyword
    }
    if(input.id == 'rgb'){
      let parseInput = input.value.replace(/\s+/g, '').split(',').map(Number) // remove spaces and convert to Number type
      hex.value = convert.rgb.hex(parseInput)
      hsl.value = convert.rgb.hsl(parseInput)
      colorPicker.value = "#" + hex.value
      cssOption.value = convert.rgb.keyword(parseInput)
    }
    if(input.id == 'hsl'){
      let parseInput = input.value.replace(/\s+/g, '').split(',').map(Number) // remove spaces and convert to Number type
      hex.value = convert.hsl.hex(parseInput)
      rgb.value = convert.hsl.rgb(parseInput)
      colorPicker.value = "#" + hex.value
      cssOption.value = convert.hsl.keyword(parseInput)
    }
    if(input.id == 'CSScolours'){
      hex.value = convert.keyword.hex(input.value.toString()) 
      rgb.value = convert.keyword.rgb(input.value.toString()) 
      hsl.value = convert.keyword.hsl(input.value.toString()) 
      colorPicker.value = "#" + hex.value
    }
    if(input.id == 'mypick'){
      hex.value = input.value.replace('#', '');
      rgb.value = convert.hex.rgb(hex.value).toString()
      hsl.value = convert.hex.hsl(hex.value).toString()
      cssOption.value = convert.hex.keyword(hex.value)
    }
  })
}

const validateColours = (validateArray) => {
  let isValid;
  validateArray.forEach((ele)=>{
    if(ele.id == 'hex_code' ){
      ele.value = ele.value.replace(/\s+/g, '')
      isValid =  ele.validity.valid
      if(ele.value == ''){isValid = false}
      validationDOM(isValid, ele , "Use valid Hex colour")
    }
    if(ele.id == 'rgb'){
      ele.value = ele.value.replace(/\s+/g, '') 
      isValid =  ele.validity.valid
      if(ele.value == ''){ isValid = false }
      validationDOM(isValid, ele, "0-255, 0-255, 0-255")
    }
    if(ele.id == 'hsl'){
      ele.value = ele.value.replace(/\s+/g, '')
      let parseInput = ele.value.split(',').map(Number)
      isValid = checkHSL(parseInput)
      validationDOM(isValid, ele, "0-360, 0-100, 0-100")
    }
    if(ele.id == 'CSScolours'){
      ele.value = ele.value.replace(/\s+/g, '')
      isValid =  keys.includes(ele.value)
      validationDOM(isValid, ele, "not a css colour")
    }
  })
  return isValid
}

const validationDOM = (isValid, input, invalidMessage) =>{
    const submit = document.getElementById("submit")
    if(!isValid || input == '') {
      input.reportValidity()
      submit.setAttribute("disabled", "");
      input.classList.add('invalid');
      input.classList.remove('valid'); 
      if(input.id == 'hsl'){
        input.setCustomValidity(invalidMessage);
        input.setAttribute("isvalid", "false")
      }
    }else{
      input.setCustomValidity("");
      input.classList.remove('invalid');
      input.classList.add('valid');
      if(input.id == 'hsl'){
        input.setCustomValidity("");
      }
      input.reportValidity()
      submit.removeAttribute('disabled')
    }
}

const checkHSL = (input) => { 
  if (input[0] >= 0 & 
    input[0] <= 360 & 
    input[1] >= 0 & 
    input[1] <= 100 & 
    input[2] >= 0 & 
    input[2] <= 100 & 
    input.length == 3)  return true
}