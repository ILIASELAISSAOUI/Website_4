var navLinks=document.querySelectorAll(".container");
console.log(navLinks)
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Vérifier si le sous-menu est déjà affiché ou non
    var subMenu = this.querySelector('.submenu');
    var isSubMenuDisplayed = subMenu.style.display !== 'none';
        console.log(isSubMenuDisplayed)
    // Afficher ou masquer le sous-menu en fonction de son état actuel
    if (isSubMenuDisplayed) {
        subMenu.style.display = 'none';
        
    } else {
        subMenu.style.display = 'block';
    }
    });
});

var toggleBtn = document.getElementsByClassName("bi-list")[0];
var navbar = document.getElementsByClassName("nav-bar")[0];
var body = document.getElementsByClassName("body")[0];
toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('hide-navBar');
    body.style.width="100%"
});