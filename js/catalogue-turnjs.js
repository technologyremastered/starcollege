window.onresize = checkIfFits;

function checkIfFits() {
	if (window.innerWidth >= 992) {
		$("#catalogue").show();
		$("#alternative-catalogue").hide();
	} else {
		$("#alternative-catalogue").show();
		$("#catalogue").hide();
	}
}

function loadApp() {
	// Create the flipbook
	$('.flipbook').turn({
			// Width
			width:922,	
			// Height
			height:600,
			// Elevation
			elevation: 50,
			// Enable gradients
			gradients: true,
			// Auto center this flipbook
			autoCenter: true
	});
	if (window.innerWidth < 992){
		$("#catalogue").hide();
	} else {
		$("#alternative-catalogue").hide();
	}
}

// Load the HTML4 version if there's not CSS transform
yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/turnjs/turn.js'],
	nope: ['js/turnjs/turn.html4.min.js'],
	both: ['js/turnjs/basic.css'],
	complete: loadApp
});