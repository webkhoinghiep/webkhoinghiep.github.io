 $(function(){
 	

 	 $(".xuong,.kn").click(function(){
 	$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800)
 	return false;
    })
     $(".sp").click(function(){
 	$('body,html').animate({scrollTop:$('#khoisanpham').offset().top},800)
 	return false;
    })
     $(".tt").click(function(){
 	$('body,html').animate({scrollTop:$('#khoithongtin').offset().top},800)
 	return false;
    })
     $(".lh").click(function(){
 	$('body,html').animate({scrollTop:$('#khoilienhe').offset().top},800)
 	return false;
    })
     $(".cmt").click(function(){
 	$('body,html').animate({scrollTop:$('#phanhoi').offset().top},800)
 	return false;
    })
})  
 