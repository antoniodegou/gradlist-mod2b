 document.getElementById('copy').addEventListener('click', e => {
    e.preventDefault()
    // ref https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    var copyText = document.getElementById('my-list')
    navigator.clipboard.writeText(copyText.innerText)
})