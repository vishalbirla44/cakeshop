const mobile_nav =  document.querySelector(".mobile-navbar-btn")
const mobile_header = document.querySelector(".header")

const tooggleNavbar = () => {
    
    mobile_header.classList.toggle("activv")
  }


  mobile_nav.addEventListener("click", () => tooggleNavbar())