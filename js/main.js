document.addEventListener("DOMContentLoaded", function(event){
	//
	// Updating selected nav tab based on scroll position.
	//
	vNavItems = document.getElementById("nav").children[0].children;
	vSideNavItems = document.getElementById("side-nav").children[0].children;
	vActiveID = -1;

	window.onscroll = function() {
		var doc = document.documentElement;
		var vScroll = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

		// Get the height of the browser.
		var g = document.getElementsByTagName('body')[0];
		var vBrowserHeight = window.innerHeight || doc.clientHeight || g.clientHeight;

		// Get the height of the header.
		var vHeader = document.getElementsByTagName('header')[0];
		var vHeaderHeight = vHeader.clientHeight;

		// Get the sheet height.
		var vSheetHeight = vBrowserHeight - vHeaderHeight;
		var vNavID = Math.floor(vScroll / vSheetHeight);
		vNavID--;

		// Only update the classes if they change.
		if (vNavID != vActiveID) {
			var vNavItem;
			for (var i = 0; i < vNavItems.length; i++) {

				vNavItem = vNavItems[i];
				vSideNavItem = vSideNavItems[i];
				if (i == vNavID) {
					vNavItem.classList.add("selected");
					vSideNavItem.classList.add("selected");
				}
				else {
					vNavItem.classList.remove("selected");
					vSideNavItem.classList.remove("selected");
				}
			}

			// Update the active tab id.
			vActiveID = vNavID;
		}
	};
});

function pageScroll(id) {
	var vEl = document.getElementById(id);
	var vHeader = document.getElementById("app-bar");

	// Get the desired scroll position
	var desiredScrollPosition = vEl.offsetTop - vHeader.offsetHeight;

	var isIE = !!document.documentMode;
	console.log("IE: " + isIE);
	var isEdge = !!/Edge\//.test(navigator.userAgent);
	console.log("Edge: " + isEdge);

	// Scroll.
	if (isIE || isEdge) {
		window.scroll(0, desiredScrollPosition);
	}
	else {
		window.scrollTo({
			top: desiredScrollPosition,
			behavior: "smooth"
		});
	}

	var vNav = document.getElementById("side-nav");
	vNav.classList.remove("active");

	var vMask = document.getElementById("mask");
	vMask.classList.remove("active");
}

//
// Functions to apply hover to cards.
//
function cardMouseOver(el) {
	el.classList.remove("elevation-1dp");
	el.classList.add("elevation-8dp");
}

function cardMouseOut(el) {
	el.classList.remove("elevation-8dp");
	el.classList.add("elevation-1dp");
}


function sideNavOpen(el) {
	var vNav = document.getElementById("side-nav");
	vNav.classList.add("active");

	var vMask = document.getElementById("mask");
	vMask.classList.add("active");
}
