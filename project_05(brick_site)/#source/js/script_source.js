let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

	let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			thisLink.classList.toggle('borderBottom')
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

//Form
/*
let formOpen_02=document.querySelector('.icon');
let formOpen=document.querySelector('.form');

console.log(formOpen);

formOpen_02.addEventListener('click', function(){
	console.log(formOpen.style.height)
	if(formOpen.style.height > '0px'){
		formOpen.style.height = '0px';
		formOpen_02.innerHTML = "open";
		console.log(formOpen.style.height)
	}else{
		formOpen.style.height = '450px';
		formOpen_02.innerHTML = "close";
	}
});
*/
// Image on full screem


// Image on full screem

//Sliders
let speed = 2000;

$(document).ready(function() {
	
	$('.slider_1').slick({
		arrows: true,
		dots:true,
		slidesToShow: 3,
		slidesToScroll:1,
		speed: 300,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		autoplaySpeed:1500,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		centerMode:true,
		asNavFor:".sliderBig_1",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
			//		autoplay:true,
					autoplaySpeed:speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_1').slick({
		arrows: false,
//		slidesToShow: 1,
//		centerMode:true,
		fade:true,
		asNavFor:".slider_1",
	});

	$('.slider_2').slick({
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		asNavFor:".sliderBig_2",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
					autoplay:true,
					autoplaySpeed: speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_2').slick({
		arrows: false,
//		slidesToShow: 1,
//		centerMode:true,
		fade:true,
		asNavFor:".slider_2",
	});
//Slider 3
	$('.slider_3').slick({
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		asNavFor:".sliderBig_3",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
					autoplay:true,
					autoplaySpeed:speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_3').slick({
		arrows: false,
//		slidesToShow: 1,
//		centerMode:true,
		fade:true,
		asNavFor:".slider_3",
	});
//Slider 3

//Slider 4
	$('.slider_4').slick({
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		asNavFor:".sliderBig_4",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
					autoplay:true,
					autoplaySpeed:speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_4').slick({
		arrows: false,
//		slidesToShow: 1,
//		centerMode:true,
		fade:true,
		asNavFor:".slider_4",
	});

//Slider 5
	$('.slider_5').slick({
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		asNavFor:".sliderBig_5",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
					autoplay:true,
					autoplaySpeed:speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_5').slick({
		arrows: false,
		fade:true,
		asNavFor:".slider_5",
	});

//Slider 6
	$('.slider_6').slick({
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		asNavFor:".sliderBig_6",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
					autoplay:true,
					autoplaySpeed:speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_6').slick({
		arrows: false,
		fade:true,
		asNavFor:".slider_6",
	});

//Slider 7
	$('.slider_7').slick({
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		centerMode:true,
		asNavFor:".sliderBig_7",
		responsive:[    //adaptive
			{
				breakpoint:700,
				settings:{
					arrows:false,
					autoplay:true,
					autoplaySpeed:speed,
					slidesToShow:2,
				}
			}
		]
	});
	$('.sliderBig_7').slick({
		arrows: false,
		fade:true,
		asNavFor:".slider_7",
	});

//Open Close slider



})

//Scrool with anchor

const anchors = document.querySelectorAll('a[href*="#"]')


for (let anchor of anchors) {
	anchor.addEventListener("click", function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}



//Open-Close deskription
let openBut=document.querySelectorAll('.openButt');
let openT = 'відкрити';
let closeT = 'закрити';

for(i=0; i<openBut.length; i++){
			let butParent = openBut[i].parentNode;
			let thisBut = openBut[i];

		openBut[i].addEventListener('click', function(){
			thisBut.classList.toggle('downUp');
			butParent.classList.toggle('openDescription');
			if(thisBut.innerHTML == closeT){
				thisBut.innerHTML = openT;
			}else{
				thisBut.innerHTML = closeT;
			}
			
		});
	}


// Popup code ===========================


const popUp = document.querySelector('.popUp');

// Array from images===========
let images = document.querySelectorAll('.imagePop');
console.log(images);


// Adding class Active =========
popUp.onclick = function(){
	popUp.classList.toggle('_active');
	body.classList.toggle('_lock');
}
// Adding class Active =========


//
if(images.length > 0){
	for(let i = 0; i < images.length; i++){

		images[i].addEventListener('click', function(){
			console.log(images[i]);
			popUp.classList.toggle('_active');
			changeImage(images[i].src);
			body.classList.toggle('_lock');
		})
	}

}
//

function changeImage(image){
	let pop = document.getElementById('popUpImg');
	console.log(pop.src);
	pop.src = image;
}