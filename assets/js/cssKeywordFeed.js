import cssKeyword from 'color-name'

// Gets all color keywords for 'color-name' API 
let keys = Object.keys(cssKeyword)
 
// iterate over the list
for(let i = 0; i < keys.length; i++) {
    //create options
   var el = document.createElement("option");
   el.textContent = keys[i];
   el.value = keys[i];
   el.id = keys[i]
   //add to data list DOM
   document.getElementById('datalistOptions').appendChild(el);
}
