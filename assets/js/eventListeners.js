import colPreview from '/assets/js/coloursPreview'
import outputList from '/assets/js/listOptions'
import addSpotColourDOM from '/assets/js/addSpotColourDOM'

let spotColList = []

/*
// add event listener for "add colour" bottom
*/
document.getElementById("submit").addEventListener("click", function (e) {
   
    const spotCols = document.getElementById("spotcols")
    e.preventDefault()
    let hex = document.getElementById("hex_code")
    spotColList.push(hex.value) //add to array
    spotCols.innerHTML = addSpotColourDOM(spotColList) //add to dom
    colPreview(spotColList) //add to preview
    outputList( spotColList )  //output gradient list

    // make sure all event listeners are removed
    document.querySelectorAll(".remove").forEach(function (elem) {
        elem.removeEventListener('click',removeButtonListener)
    })

    // rebuild event listeners for the new remove buttons
    document.querySelectorAll(".remove").forEach(function (elem) {
        elem.addEventListener("click", removeButtonListener)
    })

});

const removeButtonListener = (e) => {
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
    colPreview(spotColList)
    outputList( spotColList)
    // use once:true to remove event listener from deleted colour
}


// event listener for user's colour option list
document.querySelectorAll(".list-options-radio").forEach( elem => {
    elem.addEventListener('change', (e) =>{
        e.preventDefault();
        outputList( spotColList)
    })
})

document.querySelectorAll(".list-options-text").forEach( elem => {
    elem.addEventListener('keyup', (e) =>{
        e.preventDefault();
        outputList( spotColList)
    })
})
 
// event for the copy button that copies the list to clipboard
document.getElementById('copy').addEventListener('click', e => {
    e.preventDefault()
    
    var copyText = document.getElementById('my-list')
    navigator.clipboard.writeText(copyText.innerText)
})