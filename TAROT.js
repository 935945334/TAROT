var Mask_h = document.getElementById("Mask-h");
var Btn = document.getElementById("Btn");
var k = document.getElementsByClassName("k0");
var Cards = document.getElementById("Cards");
var Cards_rotate = document.getElementById("Cards-rotate");
var swiper_wrapper = document.getElementById("swiper-wrapper");
var swiper_slide = document.getElementsByClassName("swiper-slide");
var swiper_1 = document.getElementById("swiper-slide-1");
var swiper_2 = document.getElementById("swiper-slide-2");
var Num;
var direction;
Btn.addEventListener("click",function(e){
	direction = Math.round(Math.random());
	Num = Math.floor(Math.random()*22)
	console.log(direction);
	Btn.style.pointerEvents = "none";
	for(var i = 0; i < 5; i++) {
		(function(i) {
			setTimeout(function() {
				for(var x = 0; x < 22; x++) {
					k[x].style.left =  14 + Math.ceil(Math.random()*56) + "vw";
					k[x].style.top =  60 + Math.ceil(Math.random()*10) + "vh";
					k[x].style.transform = "rotate(" + i + Math.ceil(Math.random()*100) + "deg)";
				}
				
			}, (i)*500);
		})(i)
	}
	setTimeout(function() {
		for(var x = 0; x < 22; x++) {
			k[x].style.left =  "calc(50% - 7vw)";
			k[x].style.top =  "66vh";
			k[x].style.transform = "rotate(0deg)";
		}
	}, 2500);
	setTimeout(function() {
		Mask_h.style.opacity = 0.9;
		Cards.style.display = "block";
	}, 3200);
	setTimeout(function() {
		Cards.style.width = "90vw";
		Cards.style.left =  "calc(50% - 45vw)";
		Cards.style.top =  "5vh";
	}, 3300);
	setTimeout(function() {
		Cards.style.display = "none";
		Cards_rotate.style.opacity = 1;
		
		swiper_2.style.background = "url(images/" + Num + "-" + direction + ".png)";
		swiper_2.style.backgroundSize = "100%";
		swiper_2.style.transition = " ";
		swiper_1.style.transition = " ";
		swiper.slideTo(1, 1000, false);

	}, 4300);
	setTimeout(function() {
		Cards.src = "images/" + Num + "-" + direction + ".png";
		Cards.style.display = "block";
		Cards_rotate.style.display = "none";
	}, 5300);
	setTimeout(function() {
		Cards.style.width = "30vw";
		Cards.style.left =  "calc(50% - 15vw)";
		Cards.style.top =  "5vh";
	}, 6000);
})

for(var i = 0; i < 22; i++) {
	var Img = document.createElement("img");
	Img.src = "images/Cards-bg.png";
	document.body.appendChild(Img).className = "k0";

}

var swiper = new Swiper('.swiper-container', {
	effect: 'flip',
	grabCursor: true,
});






