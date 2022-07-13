const btnHamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');
const fadeOut = document.querySelectorAll('.fade-out');

const toggleClass = function (e, classToE) {
	e.classList.toggle(classToE);
}

btnHamburger.addEventListener('click', function () {
	fadeOut.forEach(e => e.style.display = 'block');
	toggleClass(header, 'open');
	toggleClass(overlay, 'fade-in');
	toggleClass(overlay, 'fade-out');
	toggleClass(headerMenu, 'fade-in');
	toggleClass(headerMenu, 'fade-out');
});







const elements = document.getElementsByClassName("element");
const elementsLength = elements.length;
let hiddenElementsLength = 0;

let left = 0;

function sliderLeft() {
	const polosa = document.getElementById('polosa');
	const windowInnerWidth = window.innerWidth;
	if (windowInnerWidth > 1355) {
		hiddenElementsLength = elementsLength - 4;
	} else {
		hiddenElementsLength = elementsLength - 3;
	}
	left = left + 300;
	if (left > 0) {
		left = -(hiddenElementsLength) * 300;
	}
	polosa.style.left = left + 'px';
}

function sliderRight() {
	const polosa = document.getElementById('polosa');
	const windowInnerWidth = window.innerWidth;
	if (windowInnerWidth > 1355) {
		hiddenElementsLength = elementsLength - 4;
	} else {
		hiddenElementsLength = elementsLength - 3;
	}
	left = left - 300;
	if (left < -(hiddenElementsLength * 300)) {
		left = 0;
	}
	polosa.style.left = left + 'px';
}


let timer;
autoSlider();

function autoSlider() {
	timer = setTimeout(function () {
		const windowInnerWidth = window.innerWidth;
		const polosa = document.getElementById('polosa');
		if (windowInnerWidth > 1355) {
			hiddenElementsLength = elementsLength - 4;
		} else {
			hiddenElementsLength = elementsLength - 3;
		}
		left = left - 300;
		if (left < -(hiddenElementsLength * 300)) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left + 'px';
		autoSlider();
	}, 3000)
}



document.getElementById('slider_right').onclick = sliderRight;
document.getElementById('slider_left').onclick = sliderLeft;

document.getElementById("polosa").addEventListener("mouseover", function () { clearTimeout(timer); }, false);
document.getElementById("slider_right").addEventListener("click", function () { clearTimeout(timer); }, false);
document.getElementById("slider_left").addEventListener("click", function () { clearTimeout(timer); }, false);


function resize() {
	const windowInnerWidth = window.innerWidth;
	if (windowInnerWidth <= 1024) {
		const polosa = document.getElementById('polosa');
		polosa.style.left = 0 + 'px';
		clearTimeout(timer);
	}
}

window.onresize = resize;