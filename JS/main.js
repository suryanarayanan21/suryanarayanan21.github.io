var main_content_offset= "75%";
var main_menu_height= "8%";
var menu_icon_size= "65%";
var main_content_offset_fraction = 0.75;
var carousel_image_number = 0;
var carousel_transition_time = 2500;
var carousel_height = 0.5;
var active_interval;

$(function(){
    $(window).scroll(function(){
        var h = $(window).scrollTop();
        if(h >= window.innerHeight*main_content_offset_fraction){
            $("#menu").css({
                "position":"fixed",
                "top":"0",
                "z-index":"1"
            });
            $("#ham-menu").css({
                "z-index":"2" 
            });
        }
        else
            $("#menu").css({
                "position":"absolute",
                "top":main_content_offset
            })
    })
    
    $(".carousel").css("height","" + carousel_height*window.innerHeight);
    
    for(var i=0; i<$(".carousel_image").length; ++i){
            if(i === carousel_image_number) $($(".carousel_image").get(i)).css("opacity","1");
            else $($(".carousel_image").get(i)).css("opacity","0");
    }
    
    var carousel_function = function(){
        carousel_image_number = ( carousel_image_number + 1 )%$(".carousel_image").length;
        
        for(var i=0; i<$(".carousel_image").length; ++i){
            if(i === carousel_image_number) $($(".carousel_image").get(i)).css("opacity","1");
            else $($(".carousel_image").get(i)).css("opacity","0");
        }
        
    }
    
    active_interval = setInterval(carousel_function,carousel_transition_time);
    
    $(".carousel").mousedown(function(){
         clearInterval(active_interval);
    });
    
    $(".carousel").mouseup(function(){
         active_interval = setInterval(carousel_function,carousel_transition_time);
    });
})