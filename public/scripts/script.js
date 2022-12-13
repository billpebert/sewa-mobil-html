// Navbar Toggler
var navbarToggler = document.getElementById("navbarToggler");
var navbarMenu = document.getElementById("navigation");
navbarToggler.addEventListener("click", (e) => {
	e.preventDefault();
	navbarMenu.classList.toggle("hidden");
});

// FAQ
var buttonFaq = document.querySelectorAll(".accordion");
for (let index = 0; index < buttonFaq.length; index++) {
	buttonFaq[index].addEventListener("click", (e) => {
		e.preventDefault();
		var idButton = e.currentTarget.getAttribute("id");
		var faqContent = document.querySelector(`#${idButton}-content`);
		// Toggle faq content
		faqContent.classList.toggle("hidden");
		// Rotate arrow
		document.querySelector(`#${idButton} img`).classList.toggle("rotate-180");
	});
}

// Toggle Dropdown
function toggleDropdown(el) {
	document.getElementById("userDropdownMenu").classList.toggle("hidden");
}
