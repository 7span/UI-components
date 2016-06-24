;/*
|------------------------------------------------------------
| GLOBAL VARIABLES
|------------------------------------------------------------
*/

/*
|------------------------------------------------------------
| DOCUMENT READY
|------------------------------------------------------------
*/

$(document).ready(function() {

});

/*
|------------------------------------------------------------
| PAGE LOADED
|------------------------------------------------------------
*/
$(window).bind("load", function() {

});


/*
|------------------------------------------------------------
| DOCUMENT MOUSE UP
|------------------------------------------------------------
*/
$(document).mouseup(function(e){
    var container = $('.auto_close');
    var opener = $('.opener');
    if (!container.is(e.target) && container.has(e.target).length === 0
       && !opener.is(e.target) && opener.has(e.target).length === 0
       ){
        container.removeClass('open');
        $('.opener').removeClass('active');
        $('.overlay').removeClass('open');
    }
});


/*
|------------------------------------------------------------
| OPENER
|------------------------------------------------------------
*/

$(document).on('click','.opener',function(){
    $this = $(this);
    $this.toggleClass('active');
    $('.opener').not($this).removeClass('active');
    var toOpen = $('.'+$this.data('open'));
    toOpen.toggleClass('open');
    $('.auto_close').not(toOpen).removeClass('open');
    if($this.data('overlay')){
      $('.overlay').toggleClass('open');
    }
});

/*
|------------------------------------------------------------
| LOG
|------------------------------------------------------------
*/
function log(input){
    console.log(input);
}

/*
|------------------------------------------------------------
| SMOOTH SCROLL
|------------------------------------------------------------
*/
$(function(){
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
