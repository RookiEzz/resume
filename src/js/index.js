// 引入zepto-modules模块
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');

module.exports = $;


// $.ajax({
//   type: 'GET',
//   url: 'localhost:8888/introduce',
//   success: function(data) {
//   	var html = "";
//   	for (var i = 0; i < data.length; i++) {
//   		html += "<li>" + data[i].name  +"</li>";
//   	};
//   	$(".test").html(html);
//     console.log(data);
//   }
// });

mui.init({
				swipeBack: true //启用右滑关闭功能
			});
			mui('.mui-scroll-wrapper').scroll();
			mui('body').on('shown', '.mui-popover', function(e) {
				//console.log('shown', e.detail.id);//detail为当前popover元素
			});
			mui('body').on('hidden', '.mui-popover', function(e) {
				//console.log('hidden', e.detail.id);//detail为当前popover元素
			});
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API 


function onPlusReady() { 
	//分享功能
	plus.share.getServices( function(s){
		shares = s;
		for(var i in s){
			if('weixin'==s[i].id){
				sharewx=s[i];
			}
		}
	}, function(e){
		alert( "获取分享服务列表失败："+e.message );
	} );
	//音乐播放自动播放
	startPlay();
}
//微信分享调用函数
$('#share').on('click', function(){
	shareWeixinMessage();
})

//微信分享函数
function shareWeixinMessage(){
	sharewx.send( {content:"Resume-任轩寻的个人求职简历",href:"http://www.renxuanxun.online/resume/index.html",extra:{scene:"WXSceneTimeline"}}, function(){
		alert( "分享成功！" );
	}, function(e){
		alert( "分享失败："+e.message );
	});
}
//音乐播放控制
var p = null; 
function startPlay() {
	if ( plus.audio == undefined ) {
		alert( "Device not ready!" );
		
	}
	p = plus.audio.createPlayer( "_www/resources/music/Faded.mp3" );
	p.play( function () {
		alert( "Audio play success!" ); 
	}, function ( e ) {
		alert( "Audio play error: " + e.message ); 
	} ); 
}
function stopPlay() {
	p.pause();
}

var isPlay = true;
$('.music_icon').on('click', function () {
	if(!isPlay){
		p.resume();
		$(this).css("animationPlayState", 'running');
		isPlay = true;
		return;
	}else{
		stopPlay();
		$(this).css("animationPlayState", 'paused');
		isPlay = false;
		return;
	}

})

//数据请求
$.ajax({
	type: 'GET',
	url: 'http://www.renxuanxun.online/resume/php/data.php',
	// data to be added to query string:
	data: { table: 'tb_skill' },
	dataType: 'json',
	success: function (res) {


		var len = res.length;
		var arr = ['标准', '规范', '后台', '数据库', '类库', '框架', '插件', '工具'];
		var arr_len = arr.length;
		var outHtml = '';

		for (var i = 0; i < arr_len; i++) {

			outHtml += '<div class="title">' + arr[i] + '</div><ul class="mui-table-view mui-table-view-chevron">';
			var inHtml = '';
			for (var j = 0; j < len; j++) {

				if (res[j].type == arr[i]) {

					inHtml += "<li class='mui-table-view-cell mui-media' id='nopad'><a class='mui-navigate-right' id='w100'><img class='mui-media-object mui-pull-left' src=" + res[j].image + "><div class='mui-media-body'>" + res[j].name + "<p class='mui-ellipsis'>" + res[j].intorduce + "</p></div></a></li>"
				}
			}
			outHtml = outHtml + inHtml + '</ul>';
		}

		document.getElementById('tabbar').innerHTML = outHtml;

	}
});

$('body').on('tap', '.mui-popover-action li>a', function () {
	var a = this,
		parent;
	//根据点击按钮，反推当前是哪个actionsheet
	for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
		if (parent.classList.contains('mui-popover-action')) {
			break;
		}
	}
	//关闭actionsheet
	$('#' + parent.id).popover('toggle');

})
// 控制音乐
// // 控制音乐







// $('.music_icon').on('tap', function () {
// 	if (!isPlay) {
// 		if (plus.audio == undefined) {
// 			alert("Device not ready!");
// 		}
// 		p = plus.audio.createPlayer("_www/resources/music/Faded.mp3");
// 		p.play(function () {
// 			isPlay = true;
// 			$(this).css("animationPlayState", 'running');
// 		}, function (e) {
// 			alert("Audio play error: " + e.message);
// 		});
// 	}
// 	else{
// 		p.stop();
// 		$(this).css("animationPlayState", 'paused');
// 	}
// })




// $.ajax({
//   type: 'GET',
//   url: '/api/skill.php',
//   success: function(data) {
//     console.log(data);
//   }
// });

//localStorage的判断，为了方便调试，暂时关闭，项目发布时打开该功能
// if(localStorage.notFirst){
// 	$(".swiper-container").hide();
// 	$("#mainContent").show();


$(".swiper-container").show();
$("#mainContent").hide();
document.getElementById('closeScan').style.display = 'none';


// 引入swiper模块
var Swiper = require('./components/swiper/swiper.min.js');

var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');


var swiper = new Swiper('.swiper-container', {
	onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function (swiper) {
		swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
});

console.log($.animate)
var IScroll = require('./components/iscroll/iscroll.js');

$('#enter').tap(function () {
	
	document.getElementById('closeScan').style.display = 'none';
	document.getElementsByClassName('music_icon')[0].style.display = 'none';
	document.getElementById('bcid').style.display = 'none';
	$(".swiper-container").hide();
	$("#mainContent").show();
	localStorage.notFirst = true;
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { return false; }, false);
	// mui.ajax('http://www.renxuanxun.online/resume/php/data.php', {
	// 	data: { table: 'tb_skill' },
	// 	dataType: 'json',//服务器返回json格式数据
	// 	type: 'get',//HTTP请求类型	              
	// 	success: function (res) {
	// 		alert(res);

	// 		var len = res.length;
	// 		var arr = ['标准', '规范', '后台', '数据库', '内库', '框架', '插件'];
	// 		var outHtml = '';
	// 		for (var i = 0; i < 7; i++) {

	// 			outHtml += '<div class="title">' + arr[i] + '</div><ul class="mui-table-view mui-table-view-chevron">';
	// 			for (var j = 0; j < len; j++) {

	// 				if (res[j].type == arr[i]) {
	// 					inHtml += "<li class='mui-table-view-cell mui-media'><a class='mui-navigate-right'><img class='mui-media-object mui-pull-left' src='../images/cbd.jpg'><div class='mui-media-body'>" + res[i].name + "<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色.</p></div></a></li>"
	// 				}
	// 			}
	// 			outHtml = outHtml + inHtml + '<ul>';
	// 		}
	// 		console.log('chengg')
	// 		document.getElementById('tabbar').innerHTML = outHtml;

	// 	},
	// 	error: function (xhr, type, errorThrown) {

	// 		console.log(type);
	// 	}
	// });

})
//  $.ajax({
//   	url:'http://www.renxuanxun.online/resume/php/getsign.php',
// 	"contentType": "application/x-www-form-urlencoded; charset=utf-8",
//   	type:'post',
//   	dataType:"json",
//   	data:{url:window.location.href},
// 	success:function(res){
//   	console.log(res);
//   	wx.config({
//     debug: true,
//     appId: res.appId,
//     timestamp: res.timestamp,
//     nonceStr: res.nonceStr,
//     signature: res.signature,
//     jsApiList: [
//       'chooseImage','scanQRCode'
//     ]
//   });
//   }
//   })

//   $('#scan').on('tap', function(){
//   wx.scanQRCode({
//       needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//       scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//       success: function (res) {
//       var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
//       alert(result);
//   }
//   });
// })

//  $('#photo').on('tap', function(){
//   wx.chooseImage({
//     count: 1, // 默认9
//     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//     success: function (res) {
//         var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//     }
// });
// })




// $("#footer div").tap(function(){
// 	var apiTarget = $(this).attr("id");
// 	var apiUrl = "http://127.0.0.1:8888/" + apiTarget;

// 	$.ajax({
// 	  type: 'GET',
// 	  url: apiUrl,
// 	  success: function(data) {
// 	  	var html = "";

// 	  	for (var i = 0; i < data.length; i++) {
// 	  		html += "<li class='Noborder'>"+ data[i].level+""+data[i].category +"：</li><li>" + data[i].name  +"</li>";
// 	  	};

// 	  	$("#scroller ul").html(html);
// 	    console.log(data);
// 	  }
// 	});


// })



// 拍照
document.getElementById('photo').addEventListener('click', function () {
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	console.log("Resolution: " + res + ", Format: " + fmt);
	cmr.captureImage(function (path) {
		alert("Capture image success: " + path);
	},
		function (error) {
			alert("Capture image failed: " + error.message);
		},
		{ resolution: res, format: fmt }
	);
}, false)

//二维码扫描





function onmarked(type, result) {
	var text = '未知: ';
	switch (type) {
		case plus.barcode.QR:
			text = 'QR: ';
			break;
		case plus.barcode.EAN13:
			text = 'EAN13: ';
			break;
		case plus.barcode.EAN8:
			text = 'EAN8: ';
			break;
	}

	alert(text + result);
	//
}



document.getElementById('barcode').addEventListener('click', function () {
	
	document.getElementById('mainContent').style.display = 'none';
	document.getElementById('bcid').style.display = 'block';
	document.getElementById('closeScan').style.display = 'block';
	document.getElementById('bcid').style.width = window.innerWidth;
	document.getElementById('bcid').style.height = window.innerheight;
	var scan = null;
	window.scan = new plus.barcode.Barcode('bcid');
	scan.onmarked = onmarked;
	scan.start();
}, false)

document.getElementById("closeScan").onclick = function () {
	document.getElementById('bcid').style.display = 'none';
	document.getElementById('closeScan').style.display = 'none';
	document.getElementById('mainContent').style.display = 'block';
	
	scan.cancel();
	scan.close();
}


// mui.ajax('http://www.renxuanxun.online/resume/php/data.php', {
// 	data: { table: 'tb_skill' },
// 	dataType: 'json',//服务器返回json格式数据
// 	type: 'get',//HTTP请求类型	              
// 	success: function (res) {
// 		alert(res);

// 		var len = res.length;
// 		var arr = ['标准', '规范', '后台', '数据库', '内库', '框架', '插件'];
// 		var outHtml = '';
// 		for (var i = 0; i < 7; i++) {

// 			outHtml += '<div class="title">' + arr[i] + '</div><ul class="mui-table-view mui-table-view-chevron">';
// 			for (var j = 0; j < len; j++) {

// 				if (res[j].type == arr[i]) {
// 					inHtml += "<li class='mui-table-view-cell mui-media'><a class='mui-navigate-right'><img class='mui-media-object mui-pull-left' src='../images/cbd.jpg'><div class='mui-media-body'>" + res[i].name + "<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色.</p></div></a></li>"
// 				}
// 			}
// 			outHtml = outHtml + inHtml + '<ul>';
// 		}
// 		console.log('chengg')
// 		document.getElementById('tabbar').innerHTML = outHtml;

// 	},
// 	error: function (xhr, type, errorThrown) {

// 		console.log(type);
// 	}
// });



