/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "20rem";
  document.getElementById("main").style.marginRight = "20rem";
  document.getElementById("navheader").style.display = "none";
  document.getElementById("navhome").style.display = "block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("navheader").style.display = "inline-block";
  document.getElementById("navhome").style.display = "none";
}