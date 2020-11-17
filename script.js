let animItems = document.querySelectorAll('._anim_items'); //найти и обьявить в переменную все обьекты которые будут поддаваться анимации

if (animItems.length > 0) { //проверяем существуют ли такие классы
	window.addEventListener('scroll', animOnScroll);          //создаём событие на целое окно бразуера при котором функция будет выполняться, и когда это событие происходит мы отправляемся в нашу функцию, и всё дело начнёт работать

	function animOnScroll(params) { //создаём функцию и в ней будем работать
		for (let index = 0; index < animItems.length; index++) {  //Создаём цикл for чтобы это дело везде работало и получаю переменную animItem каждой из элементов массива
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; // здесь я хочу получить высоту моего обьекта
			const animItemOffset = offset(animItem).top;              // здесь я хочу получить позицию моего обьекта относительно вверха 
			const animStart = 4; // Это коэффициенто который будет регулировать момент старта анимации

			// настройка момента старта анимации 
			let animItemPoint = window.innerHeight - animItemHeight / animStart; // от высоты окна бразуера я отнимаю высоту обьекта который анимируется поделённую на наш коэффициент
			// бывают ситуации когда анимируемый обьект выше по высоте окна бразуера и нам нужно немного перестроить наш момент старта
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart; // высота окна браузера - высота окна браузера / коэффициент старта
			}
			//Далее будем добавлять класс при определённых условиях
			// существуент переменная в которую поступают данные о количестве проскроленных элементов
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {    // если мы прокрутили больше чем (позиция обьекта - точка старта) но при этом прокрутили меньше чем (позиция обьекта + его высота)
				animItem.classList.add('_active');
			} else { // если условие не выполняется то мы этот класс отбираем. Для чего?
				animItem.classList.remove('_active'); // для того чтобы мы могли повторно анимировать обьект
			}


		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,  //(необходимо подключить найденную в интернете функцию, она позволяет корректо и кроссбразуено получать значение)
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}

// всё что осталось сделать обьявить функцию изначально, как раз для ситуаций когда обьект наш находится сразу в видимой части и задать некую задержу
setTimeout(() => {
	animOnScroll();
}, 220);






$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		// adaptiveHeight: true,
		// speed: 300, 
		// easing: 'ease',
		// infinite: true, // бесконечный слайдер или нет
		// initialSlide: 1, //с какого слайда стартует слайдер
		// autoplay: false, //автопроигрывание
		// autoplaySpeed: 1000, //интервал между проигрываниями 1000 = 1 sec
		// pauseOnFocus: true,
		// pauseOnHover: true,
		// pauseOnDotsHover: true,

		// draggable: false, // перемотка слайдов мышью
		// swipe: true, // перемотка слайдов на тачскрине
		// touchThreshold: 5, // чувствительность перемотки, чем больше тем меньше нужно крутануть для слайда
		// touchMove: true, // Перематывать пальцем будет, но анимации свайпа не будет

		// waitForAnimate: false, // как быстро кликаешь, так быстро и будет переключать слайд
		// centerMode: false,  // центрирует выбраный слайд, и у него появляется дежурный класс slick-center

		// variableWidth: true, //убирает отступ между обьектами, +адаптивно под любой размер

		// rows: 1, // этажей в 1 слайде
		// slidesPerRow: 1, // колличество слайдов в ряду

		// vertical: false, // слайдер листается по вертикали, нужно сделать его блочным
		// verticalSwiping: false, //вертикальный свайп тачскрином

		// asNavFor: ".slider_big",

	});
	// $('.slider_big').slick({
	// 	asNavFor: ".slider",

	// 	arrows: false,
	// 	dots: false,
	// 	fade: true,

	// 	responsive:[
	// 		{
	// 			breakpoint: 768,
	// 			settings:{
	// 				slidesToShow: 2,
	// 			}
	// 		},{
	// 			breakpoint: 480,
	// 			settings:{
	// 				slidesToShow: 1,
	// 			}
	// 		}
	// 	],
	// 	mobileFirst: false, // изменяет для бреакпоинтов с min-width на max-width

	// });
});


function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();


$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu_body').toggleClass('active');
	$('body').toggleClass('lock');
});