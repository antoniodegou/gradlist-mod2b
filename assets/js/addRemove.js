import colPreview from '/assets/js/coloursPreview'
import outputList from '/assets/js/listOptions'
import addSpotColourDOM from '/assets/js/addSpotColourDOM'

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
    spotCols.innerHTML = addSpotColourDOM(spotColList) //add to dom
    colPreview(spotColList) //add to preview
    outputList(spotColList)  //output gradient list

    document.querySelectorAll(".remove").forEach(function (elem) {
        elem.removeEventListener('click',removeButtonListener)
    })

    removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach(function (elem) {
        elem.addEventListener("click", removeButtonListener)
    })

    // removeButtons.forEach(function (elem) {
    //   elem.addEventListener("click", function (e) {
    //       e.preventDefault();
    //       // remove from col array
    //       let getElementDelete = e.target.parentNode.getAttribute("data-col")
    //       spotColList = spotColList.filter((e, i) => i.toString() != getElementDelete)
    //       //remove from dom
    //       elem.parentNode.remove()
    //       //reorder dom index number
    //       let updatedata = document.querySelectorAll("[data-col]")
    //       updatedata.forEach((el, i) => (el.dataset.col = i.toString()))
    //       // update preview
    //       colPreview()
    //       outputList()
    //       // use once:true to remove event listener from deleted colour
    //   },{ once: true });
    // });
});

const removeButtonListener = (e ) => {
    e.preventDefault();
    // remove from col array
    let getElementDelete = e.target.parentNode.getAttribute("data-col")
    spotColList = spotColList.filter((e, i) => i.toString() != getElementDelete)
    //remove from dom
    e.target.parentNode.remove()
    //reorder dom index number
    let updatedata = document.querySelectorAll("[data-col]")
    updatedata.forEach((el, i) => (el.dataset.col = i.toString()))
    // update preview
    colPreview( spotColList)
    outputList(spotColList)
    // use once:true to remove event listener from deleted colour
}

/*
// Add and refresh event listeners for new "remove" bottons
*/
// submit.addEventListener("click", function (e) {
//   removeButtons = document.querySelectorAll(".remove");

//   removeButtons.forEach(function (elem) {
//     elem.addEventListener("click", function (e) {
//         e.preventDefault();
//         // remove from col array
//         let getElementDelete = e.target.parentNode.getAttribute("data-col")
//         spotColList = spotColList.filter((e, i) => i.toString() != getElementDelete)
//         //remove from dom
//         elem.parentNode.remove()
//         //reorder dom index number
//         let updatedata = document.querySelectorAll("[data-col]")
//         updatedata.forEach((el, i) => (el.dataset.col = i.toString()))
//         // update preview
//         colPreview()
//         outputList()
//         // use once:true to remove event listener from deleted colour
//     },{ once: true });
//   });
// });


export default spotColList