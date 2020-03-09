	function filterSelection(c) {
	  		var x, i;
			  x = document.getElementsByClassName("animate-box");
			  if (c == "all") c = "";
			  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
			  for (i = 0; i < x.length; i++) {
			    removeClass(x[i], "show");
			    if (x[i].getAttribute('label').indexOf(c) > -1) addClass(x[i], "show");
			  }
		}

		// Show filtered elements
		function addClass(element, name) {
		  var i, arr1, arr2;
		  arr1 = element.className.split(" ");
		  arr2 = name.split(" ");
		  for (i = 0; i < arr2.length; i++) {
		    if (arr1.indexOf(arr2[i]) == -1) {
		      element.className += " " + arr2[i];
		    }
		  }
		}

		// Hide elements that are not selected
		function removeClass(element, name) {
		  var i, arr1, arr2;
		  arr1 = element.className.split(" ");
		  arr2 = name.split(" ");
		  for (i = 0; i < arr2.length; i++) {
		    while (arr1.indexOf(arr2[i]) > -1) {
		      arr1.splice(arr1.indexOf(arr2[i]), 1);
		    }
		  }
		  element.className = arr1.join(" ");
		}

;(function () {

'use strict';

		function loadButtons() {
			var btnContainer = document.getElementById("menuContainer");
	var btns = btnContainer.getElementsByClassName("filter-selector");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
}
}
	// Document on load.
	$(function(){
		filterSelection("all");
	});


}());