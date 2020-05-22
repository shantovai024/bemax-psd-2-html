$(document).ready(function(){

    // slider-active 
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // project-active 

    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })

    // blog-active 
    $('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // testimonial-active 
    $('.testimonial-active').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // brand-active 

    $('.brand-active').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    })

    // magnificPopup 
    $('.video-link').magnificPopup({
        type: 'iframe',
      });



})