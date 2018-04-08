var time_transaction;

window.onload = function() {
  chrome.storage.sync.get({
    slide_time: 5,
    }, function(items) {
      time_transaction = items.slide_time;
    }
  );
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
   }, time_transaction * 1000)
    console.log(time_transaction)
}

function callAngu(){
	
	angular.element(document.getElementsByClassName("enterFullScreenBtn")).click()
	myLoop(); 
	
}


