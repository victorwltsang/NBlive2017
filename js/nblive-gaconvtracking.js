$(".blue-buynow-btn, .green-buynow-btn").click(function(){
	ga("send", "event", "NB Live", "Buy Now - click");
});

$(".register-btn, .footer-register-btn").click(function(){
	ga("send", "event", "NB Live", "Register Now - click");
});

$(".carousel .item a").click(function(){
	ga("send", "event", "NB Live", "Register Today - click");
});
