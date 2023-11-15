document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const targetId = this.getAttribute('href').substring(1);
		const target = document.getElementById(targetId);
		window.scrollTo({
			top: target.offsetTop,
			behavior: 'smooth'
		});
	});
});


function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
  }
