$(document).ready(function () {
	// toggle navbar mobile
	$(".mobile-menu-button").each(function (_, navToggler) {
		var target = $(navToggler).data("target");
		$(navToggler).on("click", function () {
			$(target).animate({
				height: "toggle",
			});
		});
	});

	// FAQ
	var buttonFaq = document.querySelectorAll(".button-faq");
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
});
