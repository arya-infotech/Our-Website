$(window).on('load', function(event) {
    $('#loader').hide();
    setTimeout(function() {
        var date = new Date().getFullYear();
        $('#copyrightYear').text(date)
    }, 200)
});
$('.menu-btn').on("click", function() {
    $('#mega-menu').toggleClass('active');
});

$('#mega-menu .remove').on("click", function() {
    $('#mega-menu').toggleClass('active');
});

if ($(window).width() > 767) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();

    $(window).on('scroll', function(event) {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 60) {
            $('.home #site-header').addClass('affix');
        } else {
            $('.home #site-header').removeClass('affix');
        }
    });
} else {
    $('.home #site-header').addClass('affix');
    $('#site-header li.nav-item.dropdown').on("click", function() {
        $(this).toggleClass('open');
    });
}

$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            message: 'required',
            country: 'required',
            service: 'required',
            industries: 'required',
        },
        messages: {
            name: "",
            email: "",
            phone: "",
            message: "",
            country: "",
            service: "",
            industries: ""
        },
        submitHandler: function(form) {
            $('.submitContactForm').text('Sending...');
            $.ajax({
                url: 'contact_info.php',
                type: 'POST',
                data: $('#contactForm').serialize(),
                success: function(respose) {
                    // alert(respose);
                    $('.submitContactForm').text('Submit');
                    $('.return-msg').fadeIn().html(respose);
                    setTimeout(function() {
                        $('.return-msg').fadeOut("slow");
                    }, 5000);
                    $('#contactForm')[0].reset();
                }
            })
        }
    })
    $("#callback").validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            name: "",
            email: "",
            phone: "",
        },
        submitHandler: function(form) {
            $('.request-btn').text('Sending...');
            $.ajax({
                url: 'contact_info.php',
                type: 'POST',
                data: $('#callback').serialize(),
                success: function(respose) {
                    // alert(respose);
                    $('.request-btn').text('Submit');
                    $('.return-call-msg').fadeIn().html(respose);
                    setTimeout(function() {
                        $('.return-call-msg').fadeOut("slow");
                    }, 5000);
                    $('#contactForm')[0].reset();
                }
            })
        }
    })
    $("#hideDeveloperForm").validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            services: 'required',
            message: "required"
        },
        messages: {
            name: "",
            email: "",
            phone: "",
            services: "",
            message: "",
        },
        submitHandler: function(form) {
            $('.hire_developer').text('Sending...');
            $.ajax({
                url: 'contact_info.php',
                type: 'POST',
                data: $('#hideDeveloperForm').serialize(),
                success: function(respose) {
                    // alert(respose);
                    $('.hire_developer').text('Submit');
                    $('.hire-call-msg').fadeIn().html(respose);
                    setTimeout(function() {
                        $('.hire-call-msg').fadeOut("slow");
                    }, 5000);
                    $('#hideDeveloperForm')[0].reset();
                }
            })
        }
    })
})