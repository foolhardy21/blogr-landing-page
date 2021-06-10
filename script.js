const hamburgerLogo = document.createElement('img')

const maxWidth = window.matchMedia('(max-width: 600px)')
maxWidth.addListener(addHamburger)
addHamburger(maxWidth)

const minWidth = window.matchMedia('(min-width: 601px)')
minWidth.addListener(removeHamburger)
removeHamburger(minWidth)

function addHamburger(width) {
  if(width.matches) {

    hamburgerLogo.src = './images/icon-hamburger.svg'
    hamburgerLogo.alt='menu-icon'

    document.getElementsByClassName('company-details')[0].appendChild(hamburgerLogo)
  }

}

function removeHamburger(width) {
  if(width.matches) {
    hamburgerLogo.remove()
  }
}
