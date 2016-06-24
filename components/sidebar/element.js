/*
|------------------------------------------------------------
| SIDEBAR
|------------------------------------------------------------
*/
$(function(){
  $(document).on('click','.s_nav_list li.has_sub_nav',function(){
      $(this).siblings().removeClass('open').find('.s_sub_nav_list').slideUp('fast');
      $(this).toggleClass('open').find('.s_sub_nav_list').slideToggle('fast');
  });
});
