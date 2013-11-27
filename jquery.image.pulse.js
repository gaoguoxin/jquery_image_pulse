(function($){
  $.fn.imagePulse = function(options){
    var defaults = {
      size:20,
      speed:200,
      ZindexAxtive:100,
      ZindexNormal:1
    };

    var opt = $.extend({},defaults,options);

    return this.each(function(){
      $this = $(this);

      //parent element must be relative position
      $this.parent().css({"position":"relative"});

      $this.css({
        'position':'absolute',
        'top':0,
        'left':0
      })

      var normal_width  = $this.width();
      var normal_height = $this.height();

      $this.hover(function(){

        $(this).parent().css({"z-index":opt.ZindexAxtive});

        $(this).stop().animate({
          'top': '-'  + opt.size,
          'left': '-' + opt.size,
          "width": normal_width + 2 * opt.size,
          'height': normal_height + 2 * opt.size                
        },opt.speed)
      },function(){
        $(this).stop().animate({
          'top': 0,
          'left': 0,
          "width": normal_width,
          'height': normal_height                
        },opt.speed,function(){
          $(this).parent().css({'z-index': opt.ZindexNormal});
        })            
      })
    })
  }
})(jQuery)