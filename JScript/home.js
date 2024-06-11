function toggleMenu() {
    var menuIcon = document.querySelector('.icone-menu');
    var menuList = document.querySelector('.barre-de-menu');
  
    menuIcon.classList.toggle('hide');
    menuList.classList.toggle('hide');
  }
  document.querySelector('.icone-menu').addEventListener('click', toggleMenu);