$(document).ready(function() {
    console.log( "ready!" );
//    $(window).scroll(function() {  
//    $scroll_position = $(window).scrollTop();
//   if ($scroll_position > 610) { // if body is scrolled down by 300 pixels
//        $('nav').addClass('sticky');
//
//        // to get rid of jerk
//        header_height = $('nav').innerHeight();
//        $('body').css('padding-top' , header_height);
//    } else {
//        $('body').css('padding-top' , '0');
//        $('nav').removeClass('sticky');
//    }
//});
    
/* Sticky Navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction === 'down') 
            $('nav').addClass('sticky');
        else
            $('nav').removeClass('sticky');
        }, {
        offset: '60px'
    });
    
    /*var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window') 
        }, {
          offset: '25%'
        })*/
    
/* Scroll on buttons */

    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
/* Smooth Scroll */
    
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
    
/* Hamburger Menu */
    $('.js--nav-icon').on('click', function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        var icon =$('.js--nav-icon i');
        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        }
        else{
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close'); 
        }
    });
    
/*    gmaps   */
    
  var map = new GMaps({
      div: '.map',
      lat: 12.9538477,
      lng: 77.40,
      zoom: 12
    });
    
    map.addMarker({
      lat: 12.9538477,
      lng: 77.3507295,
      title: 'Bengaluru'
    });
});