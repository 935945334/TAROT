var Mask_h = document.getElementById("Mask-h");
var Btn = document.getElementById("Btn");
var Btn_1 = document.getElementById("Btn-1");
var unscramble = document.getElementById("unscramble");
var k = document.getElementsByClassName("k0");
var Cards = document.getElementById("Cards");
var Cards_rotate = document.getElementById("Cards-rotate");
var swiper_wrapper = document.getElementById("swiper-wrapper");
var swiper_slide = document.getElementsByClassName("swiper-slide");
var swiper_1 = document.getElementById("swiper-slide-1");
var swiper_2 = document.getElementById("swiper-slide-2");
var text_title = document.getElementById("text-title");
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
		Mask_h.style.opacity = 1;
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
		Btn_1.style.display = "block";

	}, 4300);
	setTimeout(function() {
		Cards.src = "images/" + Num + "-" + direction + ".png";
		Cards.style.display = "block";
		Cards_rotate.style.display = "none";
		Btn_1.style.display = "block";
		Btn_1.style.opacity = 1;
		Btn.style.display = "none";
	}, 5300);
	setTimeout(function() {
		// Cards.style.width = "30vw";
		// Cards.style.left =  "calc(50% - 15vw)";
		// Cards.style.top =  "5vh";
	}, 6000);
})
Btn_1.addEventListener("click",function(e){
	Cards.style.width = "30vw";
	Cards.style.left =  "calc(50% - 15vw)";
	Cards.style.top =  "5vh";
	cards_height = Cards.offsetheight;
	unscramble.style.top = "calc(53vw + 5vh + 10px)";
	Btn_1.style.opacity = 0;
	setTimeout(function() {
		Btn_1.style.display = "none";
	}, 1000);
	
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





setTimeout(function() {
	document.getElementById("load-3").style.transform = "rotate(360deg)";
}, 300);
setTimeout(function() {
	document.getElementById("load-2").style.transform = "rotate(-360deg)";
}, 200);
setTimeout(function() {
	document.getElementById("load-1").style.transform = "rotate(360deg)";
}, 100);


window.onload = function(){ 
	setTimeout(function() {
		document.getElementById("load-3").style.opacity = 0;
		document.getElementById("load-2").style.opacity = 0;
		document.getElementById("load-1").style.opacity = 0;
		document.getElementById("load-bg").style.opacity = 1;
		document.getElementById("bz").style.opacity = 1;
		document.getElementById("bz-w").style.opacity = 1;
		document.getElementById("title").style.opacity = 1;
	}, 1000);
	setTimeout(function() {
		document.getElementById("bz").style.transition = "all 0.5s ease 0s";
	}, 1900);
	setTimeout(function() {
		document.getElementById("bz").style.top = 0;
		document.getElementById("title").style.top = 0;
	}, 2000);
	setTimeout(function() {
		for(var i = 0; i < 22; i++) {
			(function(i) {
				setTimeout(function() {
					k[i].style.opacity = 1;
					k[i].style.left = "calc(50% - 7vw)";
				}, (i)*20);
			})(i)
		}
		for(var x = 0; x < 22; x++) {
			
		}
	}, 2500);
	setTimeout(function() {
		Btn.style.opacity = 1;
	}, 3000);
} 


for(var i = 0; i < 44; i++) {
	var Img = document.createElement("img");
	if (i < 22) {
		Img.src = "images/" + i + "-0.png";
	}else{
		Img.src = "images/" + (i-22) + "-1.png";
	}
	document.body.appendChild(Img).className = "cache";
}








