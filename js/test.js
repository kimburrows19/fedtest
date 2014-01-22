$(document).ready(function(){
	
	if($(window).width()<=930){$('#frm-submit').css({bottom:"0px"});}
	else{$('#frm-submit').css({bottom:"280px"});}

	$(window).resize(function(){
		if($(window).width() <= 930){
			if($('.stuff')){$('.stuff').remove();}
			$( "body" ).prepend( "<div class='stuff'>" + $( window ).width() + "</div>" );
			$('#frm-submit').css({bottom:"0px"});
		}
		if($(window).width()>930){
			$('#frm-submit').css({bottom:"280px"});
		}
	});	


	var url =  "http://fedtest.aws.af.cm/";
    $.getJSON(url + "?callback=?", null, function(edulevels) {
        var strEdLevels = "";
        for(i in edulevels) {
        	level = edulevels[i];
        	strEdLevels+="<input type='radio' required='' class='btn-radio' name='edlevel' value='"+i+"'/>"+level+"<br>";
        }
        $("#edlevel-list").append(strEdLevels);
    });
    $('#frm-submit').submit(function(){
		var regex1 = /^\([2-9]\d{2}\)[2-9]\d{2}-\d{4}$/;
		var regex2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!regex1.test($('.phone').val())){
			alert("The phone number you entered is invalid.");return false;
		}
		if(!regex2.test($('.email').val())){
			alert("The email address you entered is invalid.");return false;
		}
		
			
    });
});

