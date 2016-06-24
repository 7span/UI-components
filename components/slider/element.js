
/*
|------------------------------------------------------------
| SS SLIDER
|------------------------------------------------------------
*/
$(function(){
  $('.ss_slider1').ssSlider({
    'xs_visible':1,
    'sm_visible':2,
    'md_visible':3,
    'lg_visible':4,
    'gutter':10,
  });

  $('.ss_slider2').ssSlider({
    'xs_visible':1,
    'sm_visible':1,
    'md_visible':1,
    'lg_visible':1,
    'gutter':0,
  });

});

(function ($, window, document, undefined) {
    var pluginName = "ssSlider",
        dataKey = "plugin_" + pluginName;

    var Plugin = function (element, options) {

        this.element = element;

        //------DEFAULT OPTIONS-------//
        this.options = {
            xs_visible:1,
            sm_visible:2,
            md_visible:3,
            lg_visible:4,
            gutter:10,
            pilot:'',
            prev:'',
            next:'',
            totalSlide:'',
            currentSlide:'0',
            slideWidth:'',
            visibleCount:'',
            callback:function(){}
        };

        this.init(options);
    };

    Plugin.prototype = {
        init: function (options) {
            $.extend(this.options, options);
            //------DO THE THINGS-------//
            this.set();
            this.bindUIActions();
            this.options.callback.call(this.element);
        },

        bindUIActions:function(){
          var _this = this;
          _this.options.next.click(function(){
            _this.slide('next');
          });
          _this.options.prev.click(function(){
            _this.slide('prev');
          });
        },

        set:function(){
          var windowWidth = $(window).outerWidth();
          if(windowWidth<768){
            this.options.visibleCount = this.options.xs_visible;
          }
          else if(windowWidth>=768 && windowWidth<992){
            this.options.visibleCount = this.options.sm_visible;
          }
          else if(windowWidth>=992 && windowWidth<1200){
            this.options.visibleCount = this.options.md_visible;
          }
          else if(windowWidth>=1200){
            this.options.visibleCount = this.options.lg_visible;
          }

          $(this.element).find('.sss_wrap').css({
            'margin-left':'-'+this.options.gutter+'px',
            'margin-right':'-'+this.options.gutter+'px',
          });
          $(this.element).find('.sss_wrap > li').css({
            'width':100/this.options.visibleCount+'%',
            'padding-left':this.options.gutter+'px',
            'padding-right':this.options.gutter+'px',
          });
          this.options.totalSlide = $(this.element).find('.sss_wrap > li').length;
          this.options.pilot = $(this.element).find('.sss_wrap > li').eq(0);
          this.options.slideWidth = $(this.element).find('.sss_wrap > li').outerWidth();
          this.options.prev = $(this.element).find('.sss_prev');
          this.options.next = $(this.element).find('.sss_next');
        },

        slide:function(to){
          if(to=='next'){
            if(this.options.currentSlide + this.options.visibleCount  < this.options.totalSlide){
                this.options.currentSlide++;
            }
            else{
                this.options.currentSlide=0;
            }
          }
          else if(to=='prev'){
            if(this.options.currentSlide != 0){
                this.options.currentSlide--;
            }
            else{
                this.options.currentSlide=0;
            }
          }
          else{
            to = to - 1;
            if(this.isNum(to) && to > 0 ){
              if(to + this.options.visibleCount > this.options.totalSlide){
                to = this.options.totalSlide - this.options.visibleCount;
              }
              this.options.currentSlide=to;
            }
          }
          console.log(this.options.currentSlide);
          this.options.pilot.css('margin-left','-'+this.options.slideWidth*this.options.currentSlide+'px');
        },

        isNum:function(value){
          if (isNaN(value)) {
            return false;
          }
          var x = parseFloat(value);
          return (x | 0) === x;
        }
    };

    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * return plugin instance.
     */
    $.fn[pluginName] = function (options) {
        var plugin = this.data(dataKey);
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }
       return plugin;
    };
}(jQuery, window, document, undefined));
