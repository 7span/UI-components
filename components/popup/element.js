
/*
|------------------------------------------------------------
| POPUP
|------------------------------------------------------------
*/

$(function(){
    popup.init();
});

var popup = {
	el:{
  },
  data:{
		currentPopup:''
  },
  init:function(){
    popup.bindUIActions();
  },
  bindUIActions:function(){
    $(document).on("click",'.popup_open',function(){
			popup.open($(this).data('popup'));
		});
    $(document).on("click",'.popup_close',function(){
			popup.close($(this).parents('.popup').attr('id'));
		});
		$(document).mouseup(function(e){
		    var container = $('.popup_overlay');
		    if (container.is(e.target)){
		        popup.close(popup.data.currentPopup);
		    }
		});
		$(document).keyup(function(e){
		    if(e.keyCode==27){
					popup.close(popup.data.currentPopup);
				}
		});
  },
	open:function(popupID){
		popup.close(popup.data.currentPopup);
		popup.data.currentPopup=popupID;
		$('body').addClass('oh');
		$('#'+popupID).parents('.popup_overlay').addClass('open');
		$('#'+popupID).addClass('open');
		$('#'+popupID).find('.popup_focus').focus();
	},
	close:function(popupID){
		popup.data.currentPopup='';
		$('#'+popupID).parents('.popup_overlay').removeClass('open');
		$('#'+popupID).removeClass('open');
		$('body').removeClass('oh');
	},
};
