/*
// Add new Spot colours to the DOM
*/
import * as bootstrap from 'bootstrap'
const addSpotColourDOM = (spotColList) => {
    let a = "";
    spotColList.forEach((item, i) => {
      a += `<div class="row spot-col mb-4  " data-col="${i}" >
              <div class="col-2 remove  d-flex align-items-center justify-content-center" data-icon="&#xe905;"   title="Remove Colour" data-bs-placement="bottom"></div>
              <div class="col-10  colour-demo" style="background-color:#${item}"></div>
          </div>`
    });

    return a;
  };
  
  export default addSpotColourDOM