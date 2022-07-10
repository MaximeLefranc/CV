$(function(){
    var skillsHide = $("#skills").find(".container")
    var experienceHide = $("#experience").find("span,ul")
    var educationHide = $("#education").find(".row")
    var portfolioHide = $("#portfolio").find(".row")
    var recommendationsHide =$("#recommendations").find("#myCarousel")

    $(experienceHide).hide()
    $(skillsHide).hide()
    $(educationHide).hide()
    $(portfolioHide).hide()
    $(recommendationsHide).hide()

    $("#skills").mouseenter(function(){
        $(skillsHide).show(2000)
    });

    $("#experience").mouseenter(function(){
        $(experienceHide).show(2000)
    });

    $("#education").mouseenter(function(){
        $(educationHide).show(2000)
    });

    $("#portfolio").mouseenter(function(){
        $(portfolioHide).show(2000)
    });

    $("#recommendations").mouseenter(function(){
        $(recommendationsHide).show(2000)
    });

    // $("#experience").mouseleave(function(){
    //     $(experienceHide).hide(1000)
    // });
     
        // $("#experience").mouseenter(function(){
    //     $("#experience").show()
    // })
       
    

    // $(".position-rigth , .position-left").hover(function(){
    //     $("#experience").find("h3,h4,p,span").hide()
    // },
    // function(){
    //     $("#experience").find("h3,h4,p,span").show()
    // });

});