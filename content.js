
window.onload = function() {
	callAngu()
}

var i = true;

function myLoop () {
   setTimeout(function () {
      angular.element(document.getElementsByClassName("fullScreenNext floatingViewBtn")).click()
      //i++;
      if (i === true) {
         myLoop();
      }
   }, 5000)
}

function callAngu(){
	
	angular.element(document.getElementsByClassName("enterFullScreenBtn")).click()
	myLoop(); 
	
}


