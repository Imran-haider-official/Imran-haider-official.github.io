const img=document.getElementById("image")
const showbutton=document.getElementById("showimage")
const hideimagebutton=document.getElementById("hideimage")



showbutton.addEventListener("click", () => {
    img.style.display="block"
    showbutton.style.display="none"
    hideimagebutton.style.display="block"

})

hideimagebutton.addEventListener("click", () => {
    img.style.display="none"
    showbutton.style.display="block"
    hideimagebutton.style.display="none"

})