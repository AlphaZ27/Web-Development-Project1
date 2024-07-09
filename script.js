/* Toggle between adding and removing the "overlay" class to topnav when the user clicks on the icon */
/* Opens the overlay menu when the user clicks the icon */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
/* Closes the overlay menu when the user clicks the icon */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



/*         Show/Hide Spoiler Button        */
function spoiler() {
  var x = document.getElementById("spoiler");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



//  6 Button Tab Gallery | Show/Hide Function
function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById('tab1Content').style.display = "none";
  document.getElementById('tab2Content').style.display = "none";
  document.getElementById('tab3Content').style.display = "none";
  document.getElementById('tab4Content').style.display = "none";
  document.getElementById('tab5Content').style.display = "none";
  document.getElementById('tab6Content').style.display = "none";
      
  //Show the Selected Tab
  document.getElementById('tab' + tabIndex + 'Content').style.display = "block";  
}



/*         Scroll to Top Button       */
function scrollToTop() { 
            window.scrollTo(0, 0); 
        } 

