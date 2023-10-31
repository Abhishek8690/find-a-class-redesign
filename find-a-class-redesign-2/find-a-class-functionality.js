import './locate.js';
$(document).ready(function () {
    //first-dropdown
    $('#dropdown-div-id').click(function () {
        $('#options-div-id').toggle();
        if ($('#options-div-id').css("display") == "block") {
            $('#carrot-img-id').addClass("rotate")
        } else {
            $('#carrot-img-id').removeClass("rotate")
        }
        var outer_width_options = $('#dropdown-div-id').outerWidth();
        $('#options-div-id').css('width', outer_width_options);
        $(window).resize(function () {
            var outer_width_options = $('#dropdown-div-id').outerWidth();
            $('#options-div-id').css('width', outer_width_options);
        });
    });
    $('.options').click(function () {
        var selected_cat_first = $(this).text();
        var option_one = selected_cat_first;
        $('.class-dropdown').text(selected_cat_first);
        if ($(this).css("display") == "block") {
            $('#carrot-img-id').addClass("rotate")
        } else {
            $('#carrot-img-id').removeClass("rotate")
        }
    })

    //second-dropdown
    $('#dropdown-div-two-id').click(function () {
        $('#options-div-two-id').toggle();
        if ($('#options-div-two-id').css("display") == "block") {
            $('#carrot-img-two-id').addClass("rotate")
        } else {
            $('#carrot-img-two-id').removeClass("rotate")
        }
        var outer_width_options = $('#dropdown-div-two-container-id').outerWidth();
        $('#options-div-two-id').css('width', outer_width_options);
        $(window).resize(function () {
            var outer_width_options = $('#dropdown-div-two-container-id').outerWidth();
            $('#options-div-two-id').css('width', outer_width_options);
        });
    });
    $('.options-two').on("click", function () {
        var selected_cat_second = $(this).text();
        var option_second = selected_cat_second;
        $('.class-dropdown-two').text(selected_cat_second);
        if ($(this).css("display") == "block") {
            $('#carrot-img-two-id').addClass("rotate")
        } else {
            $('#carrot-img-two-id').removeClass("rotate")
        }
    })
    $(document).on("click", function (event) {
        if (!$(event.target).closest("#dropdown-div-id").length) {
            $("#options-div-id").css('display', 'none');
            $('#carrot-img-id').removeClass('rotate');
        }
        if (!$(event.target).closest("#dropdown-div-two-id").length) {
            $("#options-div-two-id").css('display', 'none');
            $('#carrot-img-two-id').removeClass('rotate');
        }
    });

    $('.about-class-format').click(function () {
        $('#modal-id').addClass('d-block');
        $('#wrapper-id').addClass('wrapper-blur');
    })
    $('#close-btn-id').click(function () {
        $('#modal-id').removeClass('d-block');
        $('#wrapper-id').removeClass('wrapper-blur');
    })
    var modal = document.getElementById('modal-id');
    var about_class = document.getElementsByClassName('about-class-format');
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            $(modal).removeClass('d-block')
            $('#wrapper-id').removeClass('wrapper-blur');
        }
        if(event.target == about_class){
            $(modal).addClass('d-none')
            $('#wrapper-id').addClass('wrapper-blur');
        }
    }
       //validation
       $('#show-btn-id').on("click", function(){
        if($('#class-dropdown-id').text().trim() === 'Choose a Class' || $('#class-dropdown-two-id').text().trim() === 'All Formats'){
            $('.validation-text').removeClass('d-none');
        }
        else {
            $('.validation-text').addClass('d-none');
        }
        })
        //location div pop - up
    $('#location-address-id').click(function(){
        $('#location-id').removeClass('d-none');
    });    
    $('#location-close-btn-id').click(function(){
        $('#location-id').addClass('d-none');
        $('#options-div-three-id').css('display','none');
        $('#carrot-img-id-three').removeClass("rotate");
    });
    // pop-up functionality
    $('#distance-dropdown-div-id').click(function () {
        $('#options-div-three-id').toggle();
        if ($('#options-div-three-id').css("display") == "block") {
            $('#carrot-img-id-three').addClass("rotate")
        } else {
            $('#carrot-img-id-three').removeClass("rotate")
        }
        var outer_width_options_three = $('#distance-dropdown-div-id').outerWidth();
        $('#options-div-three-id').css('width', outer_width_options_three);
        $(window).resize(function () {
            var outer_width_options_three = $('#distance-dropdown-div-id').outerWidth();
            $('#options-div-three-id').css('width', outer_width_options_three);
        });
    });
    $('.options-three').click(function () {
        var selected_cat_third = $(this).text();
        var option_three = selected_cat_third;
        $('.distance-dropdown').text(selected_cat_third);
        if ($("#options-div-three-id").css("display") == "block") {
           $("#options-div-three-id").css('display','none');
        }
        if ($('#options-div-three-id').css("display") == "block") {
            $('#carrot-img-id-three').addClass("rotate")
        } else {
            $('#carrot-img-id-three').removeClass("rotate")
        }
       
    })
});
