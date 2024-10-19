const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('hide');
    });

  function Login(){
    window.location.href="Login.html";
  }
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 900);    
}
