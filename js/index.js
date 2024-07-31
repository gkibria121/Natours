const navButton = document.querySelector("#nav-toggle");



function NavigationClose(){
navButton.checked = false;
}

function navTo(href){
   window.location.href="#"
    NavigationClose()
    setTimeout(()=>{

        document.querySelector(href).scrollIntoView( {behavior: 'smooth'} );
    },500)

}



const popup = document.querySelector("#popup")
popup.addEventListener("click", (event)=>{
    if (event.target ==popup){
       popup.querySelector(".popup__close").click()

    }
})