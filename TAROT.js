var frame = document.getElementById("frame");
var card_arr = document.getElementById("card-arr");
var card_frame = document.getElementById("card-frame");
var k = document.getElementsByClassName("k0");
var Btn = document.getElementById("btn-1");
var Cards_rotate = document.getElementById("Cards-rotate");
var name_text = document.getElementById("name");
var Btn_2 = document.getElementById("Btn-2");
var Cards = document.getElementById("Cards");
var text = document.getElementById("text");
var equipment;
var Num;
var direction;
var Refresh = false;
var NAME;
var directionArr = ["(正位)","(逆位)"]



if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	console.log("手机");
	equipment = "手机";
	frame.style.width = "100%";
	frame.style.height = "100%";
	document.getElementById("load-m").style.display = "block";
	document.getElementById("pc-bg").style.display = "none";
}else{
	console.log("电脑");
	equipment = "电脑";
	frame.style.width = "375px";
	frame.style.height = "710px";
	frame.style.border = "4px solid #dbaf5b";
	frame.style.borderRadius = "10px";
	frame.style.boxShadow = "#272531 10px 10px 50px";
	frame.style.margin = "0 auto";
	frame.style.top = "50px";
	frame.style.overflow = "hidden";
	document.getElementById("load-p").style.display = "block";
}
if (localStorage.save_Time != new Date().getDate()) {
	localStorage.removeItem("save_Time");
	localStorage.removeItem("save_Name");
	localStorage.removeItem("save_direction");
}
var time = localStorage.save_Time;
// console.log(time);
Btn.addEventListener("click",function(e){
	if (time == undefined) {
		direction = Math.round(Math.random());
		Num = Math.floor(Math.random()*22)
		localStorage.save_Time = new Date().getDate();
		localStorage.save_Name = Num;
		localStorage.save_direction = direction;
	}else{
		direction = localStorage.save_direction;
		Num = localStorage.save_Name;
	}
	document.getElementById("swiper-slide-img-2").src = "images/" + Num + ".png";
	Cards.src = "images/" + Num + ".png";
	if (direction == 1) {
		document.getElementById("swiper-slide-img-2").style.transform = "rotate(180deg)";
		Cards.style.transform = "rotate(180deg)";
		NAME = Name_1;
	}else{
		NAME = Name_0;
	}
	name_text.innerHTML = NAME[Num][0] + directionArr[direction];
	document.getElementById("text-1-1").innerHTML = NAME[Num][1];
	document.getElementById("text-2-1").innerHTML = NAME[Num][2];
	document.getElementById("text-3-1").innerHTML = NAME[Num][3];
	var ttt = k[0].offsetTop;
	Btn.style.pointerEvents = "none";
	for(var i = 0; i < 5; i++) {
		(function(i) {
			setTimeout(function() {
				for(var x = 0; x < 22; x++) {
					k[x].style.left =  "calc(" + (20 + Math.ceil(Math.random()*60)) + "% - 25px)";
					k[x].style.top = card_arr.offsetTop + Math.ceil(Math.random()*(card_arr.clientHeight/2-20)) + "px";
					k[x].style.transform = "rotate(" + i + Math.ceil(Math.random()*100) + "deg)";
				}
			}, (i)*500);
		})(i)
	}
	setTimeout(function() {
		for(var x = 0; x < 22; x++) {
			k[x].style.left =  "calc(50% - 25px)";
			k[x].style.top =  ttt + "px";
			k[x].style.transform = "rotate(0deg)";
		}
	}, 2500);
	setTimeout(function() {
		if (equipment == "手机") {
			var www = window.screen.height*0.8/16*9
		}else{
			var www = 330;
		}
		k[21].style.width = www + "px";
		k[21].style.top = "3%";
		k[21].style.left = "calc(50% - " + www/2 + "px)";
		document.getElementById("load-k").style.opacity = 0;
		document.getElementById("bz").style.opacity = 0;
		document.getElementById("card-title").style.opacity = 0;
		Cards_rotate.style.width = www + "px";
		// Cards_rotate.style.height = window.screen.height*0.8 + "px";
		Cards_rotate.style.left = "calc(50% - " + www/2 + "px)";
		Cards.style.width = www + "px";
		// Cards.style.height = window.screen.height*0.8 + "px";
		Cards.style.left = "calc(50% - " + www/2 + "px)";
		document.getElementById("swiper-slide-img-1").style.width = www + "px";
		document.getElementById("swiper-slide-img-2").style.width = www + "px";

		
	}, 3200);
	setTimeout(function() {
		Btn.style.opacity = 0;
	}, 3300);
	setTimeout(function() {
		document.getElementsByClassName("swiper-slide")[1].style.pointerEvents = "none";
		Cards_rotate.style.opacity = 1;
	}, 3800);
	setTimeout(function() {
		document.getElementById("bz").style.display = "none";
		card_frame.style.opacity = 0;
		swiper.slideTo(1, 1000, false);
		name_text.style.opacity = 1;
		name_text.style.top = Cards_rotate.offsetTop + Cards_rotate.clientHeight + 6 + "px";
		Btn_2.style.opacity = 1;
		Btn_2.style.top = Cards_rotate.offsetTop + Cards_rotate.clientHeight + 30 + "px";
		card_frame.style.display = "none";
	}, 4000);
	setTimeout(function() {
		Cards.style.opacity = 1;
	}, 5000);
});
Btn_2.addEventListener("click",function(e){
	if (equipment == "手机") {
		var www = window.screen.height*0.18
	}else{
		var www = 150;
	}
	Cards_rotate.style.display = "none";
	Cards.style.width = www + "px";
	Cards.style.left = "calc(50% - " + www/2 + "px)";
	name_text.style.top = Cards.offsetTop + www/9*16 + 6 + "px";
	text.style.top = Cards.offsetTop + www/9*16 + 16 + "px";
	text.style.height = frame.clientHeight - (Cards.offsetTop + www/9*16) + "px";
	text.style.opacity = 1;
	Btn_2.style.opacity = 0;
})

for(var i = 0; i < 22; i++) {
	var Img = document.createElement("img");
	Img.src = "images/Cards-bg.png";
	card_arr.appendChild(Img).className = "k0";

}

var swiper = new Swiper(".mySwiper", {
	effect: "flip",
	grabCursor: true,
});





setTimeout(function() {
	document.getElementById("load-m-3").style.transform = "rotate(360deg)";
	document.getElementById("load-p-3").style.transform = "rotate(360deg)";
}, 300);
setTimeout(function() {
	document.getElementById("load-m-2").style.transform = "rotate(-360deg)";
	document.getElementById("load-p-2").style.transform = "rotate(-360deg)";
}, 200);
setTimeout(function() {
	document.getElementById("load-m-1").style.transform = "rotate(360deg)";
	document.getElementById("load-p-1").style.transform = "rotate(360deg)";
}, 100);
setTimeout(function() {
	document.getElementById("jz-text").style.opacity = 1;
}, 500);

window.onload = function(){ 
	Refresh = true;
    document.getElementById("jz-text").style.display = "none";
	setTimeout(function() {
		document.getElementById("load-p").style.opacity = 0;
		document.getElementById("load-m").style.opacity = 0;
		document.getElementById("bz").style.opacity = 1;
		card_frame.style.opacity = 1;
		// document.getElementById("title").style.opacity = 1;
	}, 1000);
	setTimeout(function() {
		document.getElementById("bz-r").style.transition = "all 0.5s ease 0s";
		document.getElementById("bz-r").style.top = 0;
		card_frame.style.top = 0;
	}, 1200);
	setTimeout(function() {
		for(var i = 0; i < 22; i++) {
			(function(i) {
				setTimeout(function() {
					k[i].style.opacity = 1;
					k[i].style.left = "calc(50% - 25px)";
				}, (i)*30);
			})(i)
		}

	}, 2000);


} 




setTimeout(function(){
    if (Refresh == false) {
        location.reload();
    }
}, 5000);


var Name_0 = [
["愚者","与众不同、幸运、不拘一格、追求新奇的梦想、眼界狭小、勇于冒险、向往自由、有艺术家气质、直攻要害、情感起伏不定、自由恋爱","有一种洒脱、无拘无束的态度，保持着轻松自然的心情迎接未来的挑战。","你即将开始或已经步入一段轻松简单的感情生活，不会如胶似漆，也不会平淡无味。它也可以形容你的伴侣，TA是一个难以琢磨的天真的人，喜欢现在的自由生活，不愿被死板的计划和安排所左右。"],
["魔术师","成功、果断、好的开端、计划完美、发展空间大、智力非凡、思维活跃、想象力丰富、拥有默契的伴侣、出现新恋人","在事业上有良好的动机、宽阔的心胸和充足的准备，一切都在你的计划之中，把握住机会向着成功稳步前进。","爱情更是游刃有余，外在的环境根本对你没有作用，处于主动地位。"],
["女祭司","知性、优秀的判断力和洞察力、独立自主、有知己、善于交流、意志坚强、擅长精神方面的研究、柏拉图式的恋爱、冷淡的恋情","每一步都要有准确的分析，小心利用高超的直觉来推测将要发生的每件事。周围的变化也是预测未来的重要依据，对未来走向不断进行逐步的修正。","感情上有含蓄谨慎的倾向，首先通过被动的接受，然后得出自己的答案。追求并拥有高度精神层面的恋爱，对感情的发展有相当的掌握。"],
["女皇","繁荣、感情丰富、信仰坚定、心胸开阔、生活优雅、财运佳、公众人物、有魅力的女性、充实的爱、有结果的恋情、怀孕","脚踏实地的工作最终将得到事业上的成就，经过努力得到的经验将帮你在以后的成功路上走得更加顺利。","感情上拥有优雅与毫不保留的爱，同伴侣的时光充满了感情和快乐，并拥有非凡的活力，它也可以形容怀孕。"],
["皇帝","坚强的意志、成绩突出、果断、专制、有领袖风范、值得信赖、物质条件优越、伴侣与你年龄悬殊、嫁妆丰厚","通过自律和脚踏实地的努力取得了相当好的成绩，同时务实的态度也会让你在更长的时间里处于事业的巅峰","在感情方面你不太擅长表达，尽管你有很好的物质基础。两性方面你更喜欢扮演父亲的角色，付出的往往是具体的某个事物，而不是情感，所以会感觉有些压抑。"],
["教皇","温柔、博爱、受人信赖、受重视、工作出色、贡献突出、眼界狭窄、从善如流而得到好处、有贵人相助、适宜接触宗教、与年长的异性有缘、姻缘佳","能够正确理解事物的本质，工作上外来的压力过多，别人对你的期望值也很高，使你有被束缚的感觉。应该寻找新的工作方法，尽管会面对很大的阻力，但结果会证明这样做是值得的。","爱情上屈从于他人的压力，只会按照对方的要求来盲目改变自己，自以为这是必要的付出，其实不过是被迫的选择。伴侣也不会对你保持忠诚，并很难满足双方真实的需要。"],
["恋人","敏感、前途光明、有志同道合的朋友、与人合作、对未来的抉择、决定未来命运的时机、浪漫的爱情、有爱情出现的预感","在事业上将面临重大的抉择，它将关系到你的未来前途。","感情和肉体对爱的渴望，它暗示恋情将向彼此关系更亲密的方向发展。"],
["战车","活泼、有野心、握有指挥权、出发、前进必胜、速战速决、战果辉煌、开拓精神、击败对手、恋爱的胜利者、热烈的爱情","事业上显示出才能，办事卓有成效。自信而富理智的你将让客户更有信心，愿意与你共同合作。","在感情上正在努力控制自己的情绪，而且控制得很好，这让你的感情发展得更顺利。"],
["力量","不屈不挠、全力以赴、克服难关、坚强的信念、旺盛的斗志、刻苦的努力、超凡的勇气、神秘的力量、轰轰烈烈的能够经受考验的牢固爱情","不断突破自我，上司和客户都对你有充分的信心，成就接踵而来。","你将发展一段真正亲密的感情，你们全心投入，相互倾诉，丝毫没有距离感。"],
["隐者","高度智慧、思虑周密、冷静寡言、追求高层次的事物、正中要害、渐入佳境、出局、追求柏拉图式恋情、单相思","你在事业的黄金时期引退，旁人都不了解，这不过是你在为下一次黄金时期的到来进行休息而已。","感情方面你将深刻思考自己在这段感情中的角色和地位，并探索彼此之间的关系。"],
["命运之轮","幸运、好时机到来、非富即贵、善于随机应变、有望升职、命中注定的相逢、一见钟情、婚姻幸福","你会发现以前所付出的无谓努力，现在反而成了你前进的动力，先前的付出终于有了回报。","命运之轮是由命运女神转动的，所以你俩之前的风风雨雨都将过去，关系将进入稳定的发展阶段。"],
["正义","公正、中立、诚实、心胸坦荡、表里如一、身兼二职、追求合理化、协调者、与法律有关、光明正大的交往、感情和睦","事业上你不会有其它太多的感觉，只是按照以前的计划认真地执行。","你对感情生活相当满意，对于你的选择对方都是接受的态度。"],
["倒吊人","接受考验、行动受限、牺牲、不畏艰辛、不受利诱、有失必有得、吸取经验教训、浴火重生、广泛学习、奉献的爱","你的事业会有短暂的停顿，但你很清楚其中的原因，再次确认自己的目标，做好出发的准备。","感情上同样需要反省的时间，你对爱情的牺牲对会给对方很大的触动，也会成为你们关系发展的催化剂。"],
["死神","失败、接近毁灭、生病、失业、维持停滞状态、持续的损害、交易停止、枯燥的生活、别离、重新开始、双方有很深的鸿沟、恋情终止","你将放弃一些得到的利益，并获得全新的发展机会。","你将会发生深刻的变化，将开始新的阶段，接受事实你们会有更加美好的旅程。"],
["节制","单纯、调整、平顺、互惠互利、好感转为爱意、纯爱、深爱","你在事业上小心翼翼，因为处事理智让你的同事感到十分放心。","目前你们的感情简简单单，一切都是这么的单纯、平静，正是因为彼此的沟通才让这段感情之路如此通畅。"],
["恶魔","被束缚、堕落、生病、恶意、屈服、欲望的俘虏、不可抗拒的诱惑、颓废的生活、举债度日、不可告人的秘密、私密恋情","你将在事业中得到相当大的名声与财富，你心中的事业就是一切，财富就是你的目标。","感情上你们开始被彼此束缚，却不希望改善这种关系，情愿忍受彼此的牵连和不满。"],
["高塔","破产、逆境、被开除、急病、致命的打击、巨大的变动、受牵连、信念崩溃、玩火自焚、纷扰不断、突然分离，破灭的爱","困难显而易见，回避不是办法，要勇于挑战，尽管它貌似强大。","突然的改变让你陷入深深的痛苦中，接受改变可以让你或你们双方在未来的人生旅途中走得更好。"],
["星星","前途光明、充满希望、想象力、创造力、幻想、满足愿望、水准提高、理想的对象、美好的恋情","当你在事业上得到希望的能量时，前途会无比光明。","你对自己很有信心，对两人的关系也抱有乐观的态度，相信自己能把握主动权，并努力追求对方，你们很可能就是命中注定的那一对。"],
["月亮","不安、迷惑、动摇、谎言、欺骗、鬼迷心窍、动荡的爱、三角关系","你可能有些不满足，希望能够把自己内在的力量全使出来，于是你开始想要晚上的时间。","你很敏感害怕被伤害，尽管有伴侣的承诺，你仍然犹豫不决，甚至有逃避的想法。"],
["太阳","活跃、丰富的生命力、充满生机、精力充沛、工作顺利、贵人相助、幸福的婚姻、健康的交际","事业上会有贵人相助，将会有更好的发展机遇。","在感情方面，你们已经走出坎坷的感情之路，前面将是洒满歌声和欢乐的坦途，你们将开始规划未来的生活。"],
["审判","复活的喜悦、康复、坦白、好消息、好运气、初露锋芒、复苏的爱、重逢、爱的奇迹","你超越了自我，在过去努力的基础上取得了成功。","双方都在认真学习和成长，虽然表面上的变化并不大，但内在的改变已经很大了。"],
["世界","完成、成功、完美无缺、连续不断、精神亢奋、拥有毕生奋斗的目标、完成使命、幸运降临、快乐的结束、模范情侣","因为努力工作，所以回报丰厚。","你们在彼此的承诺中持续着美好的关系。"]
];
var Name_1 = [
["愚者","自负、固执、不安定、墨守成规、缺乏责任心、生活在梦幻中、不现实、不会应变、停滞不前、行为古怪、方向错误、感情不稳定","在事业上过于自负、固执己见，即使有旁人的劝告都无法让你产生任何的警觉，失去了最关键的机遇，结果只能是事倍功半。","近乎执着地编织太多虚幻的梦，与伴侣无法顺利沟通，恋情不安定，感情忽冷忽热。"],
["魔术师","失败、态度消极、做事匆忙、优柔寡断、才能平庸、缺乏技术、没有判断力、没有创造力、爱情没有进展、注意伴侣的行为","你有投机心态，躲在自己的保护层中生怕受到伤害，对事业的态度有了些许偏差，表现出漫无目标和缺乏自律。","不肯遵守一些基本准则，不惜靠控制对方甚至毁灭对手的方式来实现自己的目的，所以将带来精神、情感或健康上的种种问题。"],
["女祭司","无知、冲动、缺乏理解力、神经质、有洁癖、对人冷淡、自我封闭、与女性朋友争执、单相思、健康不佳、晚婚或独身主义、不孕 ","不能继续用精神加以分析，开始采用其它的方式决定未来的发展方向，并努力寻求外来的援助与合作。","感情上冷漠迟缓，态度不明确，经过暂时的独处和内心的反思后，再次回到现实生活中才可能重新找到伴侣。"],
["女皇","平庸、任性、迷惑、内心动摇、不思进取、自负、傲慢、疲倦、浪费、虚荣心强、计划搁置、不良的男女关系、不孕、流产","中即便脚踏实地也无法达到要求，发现不足正在努力改正。感情上过于追求理想化，无法容忍有缺陷的感情。","在家庭或两性关系中可能会遇到困难，关于孩子的问题上，它可能意味着流产、堕胎或生产。"],
["皇帝","意志薄弱、幼稚、武断、固执、傲慢、疲劳过度、经济基础薄弱、爱情很勉强、痛苦而没结果的恋情","事业会因为固执和武断而遭到失败。感情上因为缺少自我的约束而表现不专一，可能拥有不只一个伴侣。","缺乏对伴侣的承诺，也没有坚实的物质基础，所以你很难得到真正的伴侣。"],
["教皇","冷漠、善于表达、太罗嗦、孤立无援、成功无望、眼界开阔、思路敏捷、改变以往感情上的不足、不被认同的恋情、对伴侣关心过度、姻缘淡","爱情上屈从于他人的压力，只会按照对方的要求来盲目改变自己，自以为这是必要的付出，其实不过是被迫的选择。伴侣也不会对你保持忠诚，并很难满足双方真实的需要。","当你感到无法接受对方的意见时，会及时与其沟通，找出改善关系的做法。"],
["恋人","幼稚、退休、孤独、有阻力、眼花缭乱、血气方刚、对结果失望、充满戒心、逃避爱情、恋情短暂、分手、多情","你总保持着很高的戒心，让对方感到很不舒服，不愿同你合作。","青春年少的你们还没有准备好迎接现实生活，感情上表现幼稚。你对成长虽有期待与希望，却希望永远待在父母的保护层里面躲避危险，逃避责任。"],
["战车","怯懦、有强敌、受挫折、丧失斗志、急性子导致失败、缺少资金、不感兴趣、被拒绝、使对方失去信任、对爱情采取逃避态度","放弃以往在事业上所坚持的，结局将会更加完美。","感情上失去方向，你已经没有以往的冷静，这让对方在心中产生了不信任感，也许你要反省一下自己的所作所为了。"],
["力量","疑心过度、犹豫不决、缺乏实力、没有耐心、危险的赌注、失去自信、失去别人的信任、故弄玄虚、自大、蛮干、禁不住诱惑、爱情无法持久","内心的恐惧使你畏首畏尾，进而遭遇事业的瓶颈，感到失去了自信。","在爱情上患得患失，失去清醒的判断。"],
["隐者","工作狂、铁面无私、偏见、有怨言、不够通融、孤独、固执、戒备心强、迷失方向、举止轻浮、怀疑和逃避爱情","在事业中过多的投入已经让你不愿面对其它事情，因而事业有了突破性的进展。","在感情方面，用工作繁忙来逃避这段感情的发展，对伴侣态度冷淡，因为害怕感情的发展而在关键时刻退缩，使对方心寒。"],
["命运之轮","劣势、时机不好、生活困苦、情况恶化、工作易出错、停止前进、失恋、恋情短暂","命运之轮正转到了你人生最低迷的时刻，也许你有些无法接受，但是若能以平常心来看待，这无疑是你成长的最好时机，需要认真面对。感情方面所受到的挫折近乎让你崩溃，然而你还在不断努力。","虽然现在你面前是无数的荆棘，但坚持过去将是平坦的大道。"],
["正义","失衡、偏见、纷扰、诉讼、独断专行、问心有愧、无法两全、表里不一、男女性格不合、情感波折、无视社会道德的恋情","长时间的压抑使你在事业最关键的时刻倒下了，需要认真修整一番才能再次前进。","感情上你一直忍让着，然而这次你却爆发了，开始指责对方的不是，你们的感情将会有很大的波折。"],
["倒吊人","无谓的牺牲、骨折、厄运、不够努力、处于劣势、任性、利己主义者、缺乏耐心、受惩罚、逃避爱情、没有结果的恋情","事业上缺乏远见，迷失了努力的目标。感情上你没有了为对方付出的念头，而对方对你的态度依旧，这使你更想逃避。","你已经忽略了内心深处正确的判断力，这让你开始遇到很多失败。"],
["死神","抱有一线希望、起死回生、回心转意、摆脱低迷状态、挽回名誉、身体康复、突然改变计划、逃避现实、斩断情丝、与旧情人相逢","事业上你在试图“两全其美”，希望能够发生奇迹。","对方已经接受了改变，而你却在逃避现实，你俩的距离正在越来越大。"],
["节制","消耗、下降、疲劳、损失、不安、不融洽、爱情的配合度不佳","你陷入了朝令夕改的怪圈，不妨效仿一下愚人勇往直前，或许能够取得更大的成功。","感情上彼此虽然还在不断尝试着沟通，但每次之后总是感觉没有收获，正因为如此你们之间的距离才会越拉越大。"],
["恶魔","逃离拘束、解除困扰、治愈病痛、告别过去、暂停、别离、拒绝诱惑、舍弃私欲、别离时刻、爱恨交加的恋情","理性开始支配欲望，找到真正值得努力的目标。","感情上开始尝试与对方进行沟通，这让你俩的感情更加牢固。"],
["高塔","困境、内讧、紧迫的状态、状况不佳、趋于稳定、骄傲自大将付出代价、背水一战、分离的预感、爱情危机","事业开始有稳定的迹象，你不要盲目抵抗改变的发生，这只会导致更大的改变，无论你如何抵抗，改变终究会发生。","双方的情绪终于平静下来，虽然沟通上还有些困难，但不会有太大的变化了，也许你做些让步，会让你们的感情更融洽。"],
["星星","挫折、失望、好高骛远、异想天开、仓皇失措、事与愿违、工作不顺心、情况悲观、秘密恋情、缺少爱的生活","你不要全部依靠别人的给予，因为你还有希望在心中燃烧，只有靠自己才有真正的发展动力。","感情方面你俩无法彼此信任，感觉无法把自己托付给对方，也许你们退一步，都冷静一下就能找出解决问题的途径，因为答案就在你们的心中。"],
["月亮","逃脱骗局、解除误会、状况好转、预知危险、等待、正视爱情的裂缝","你因为外界的压力开始退缩了，并对自己的既定目标产生了怀疑。","你们之间的问题开始浮现，虽然有些痛，但是只要共同面对存在的困难，问题就解决一半了。"],
["太阳","消沉、体力不佳、缺乏连续性、意气消沉、生活不安、人际关系不好、感情波动、离婚","你在事业上竞争心太急切了，把对手都吓跑了，然而也让合作伙伴感到害怕，或许你该放松些。","感情上两人间出现一些小变化，开始在乎对方的态度和自己的付出，这些怀疑也许都是没必要的。"],
["审判","一蹶不振、幻灭、隐瞒、坏消息、无法决定、缺少目标、没有进展、消除、恋恋不舍","缺乏清晰的判断，试图用物质填充精神的空虚。","不断地回忆着过去的美好时光，不愿意去正视目前的问题，你们的关系已经是貌合神离了。"],
["世界","未完成、失败、准备不足、盲目接受、一时不顺利、半途而废、精神颓废、饱和状态、合谋、态度不够融洽、感情受挫","在事业的路上有巨大的障碍，你精神不振，丧失了挑战的动力。","你们不再重视承诺，只是盲目接受对方。彼此最好能沟通一下，不要让痛苦继续纠缠着你们。"]
];
