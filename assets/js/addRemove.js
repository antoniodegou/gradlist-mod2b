import colPreview from '/assets/js/coloursPreview'
import outputList from '/assets/js/listOptions'

let spotColList = []
const submit = document.getElementById("submit")
const spotCols = document.getElementById("spotcols")

let removeButtons = document.querySelectorAll(".remove")

/*
// add event listener for "add colour" bottom
*/
submit.addEventListener("click", function (e) {
    e.preventDefault()
    let hex = document.getElementById("hex_code")
    spotColList.push(hex.value) //add to array
    spotCols.innerHTML = domColList(spotColList) //add to dom
    colPreview() //add to preview
    outputList()  //output gradient list
});

/*
// Add and refresh event listeners for new "remove" bottons
*/
submit.addEventListener("click", function (e) {
  removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
        e.preventDefault();
        // remove from col array
        let getElementDelete = e.target.parentNode.getAttribute("data-col")
        spotColList = spotColList.filter((e, i) => i.toString() != getElementDelete)
        //remove from dom
        elem.parentNode.remove()
        //reorder dom index number
        let updatedata = document.querySelectorAll("[data-col]")
        updatedata.forEach((el, i) => (el.dataset.col = i.toString()))
        // update preview
        colPreview()
        outputList()
        // use once:true to remove event listener from deleted colour
    },{ once: true });
  });
});
/*
// Add new Spot colours to the DOM
*/
const domColList = (spotColList) => {
  let a = "";
  spotColList.forEach((item, i) => {
    a += `<div class="row spot-col mb-4  " data-col="${i}" >
            <div class="col-2 remove  d-flex align-items-center justify-content-center" data-icon="&#xe905;"></div>
            <div class="col-10  colour-demo" style="background-color:#${item}"></div>
        </div>`
  });
  return a;
};

export default spotColList