import spotColList from '/assets/js/addRemove'

/*
// Add colours to the preview
*/

const spotPrev = document.getElementById("gradpreview")
const colPreview = ( spotColList) => {
    let arr = spotColList.map((i) => "#" + i).join(" , ")
    let len = spotColList.length
    spotPrev.style.transition = "all 1s";
    spotPrev.style.background = len === 1 ? "#" + spotColList[0] : `linear-gradient(to bottom, ${arr})`
    //compute color-spots  height and match for the preview
    let height = 0
    let heights = document.querySelectorAll(".spot-col")
    heights.forEach((a, i )=>{
        // Get values of height and margin bottom
        let iHeight = a.offsetHeight
        let mBottom = parseInt(window.getComputedStyle(a).getPropertyValue('margin-bottom'))
        // dont compute the last on the list
        if(heights.length -1   == i){ mBottom = 0}
        height += (iHeight + mBottom)
    })
    spotPrev.style.height = `${height}px`
    // don't show element while there is no height
    if(height == 0){
        spotPrev.classList.remove('opacity-100')
        spotPrev.classList.add('opacity-0')
    }else{
        spotPrev.classList.add('opacity-100')
        spotPrev.classList.remove('opacity-0')
    }

};

export default colPreview