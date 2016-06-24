/*
|------------------------------------------------------------
| NOTIFICATION
|------------------------------------------------------------
*/
$(function(){
  notification.init();

  $('.not_info').click(function(){
    notification.create({
      text:'This is Info Notification. Hulalala Hulala !',
      type:'info',
      timeout:'2000',
    });
  });
  $('.not_success').click(function(){
    notification.create({
      text:'This is Success Notification. Awwwww Awwwww !',
      type:'success',
      width:'500px',
    });
  });
  $('.not_warning').click(function(){
    notification.create({
      text:'This is Warning Notification. Ohhhhh Ohhhhh !',
      type:'warning',
    });
  });
  $('.not_danger').click(function(){
    notification.create({
      text:'This is Danger Notification. Nooooooo Nooooo !',
      type:'danger',
    });
  });
  $('.not_icon').click(function(){
    notification.create({
      text:'This is Custom Icon. Hurray !',
      type:'danger',
      icon:false
    });
  });


  $('.not_hide').click(function(){
    notification.destroy();
  });
});


var notification = {
	el:{
  },
  data:{
  },
  init:function(){
    this.bindUIActions();
  },
  bindUIActions:function(){
    var _this = this;
    $(document).on('click','.ss_notification .ssn_close',function(){
      _this.destroy();
    });
  },
  create:function(settings){
    var _this = this;

    //REMOVE PREV NOTIFICATION
    $('.ss_notification').remove();

    //NOTIFICATION TYPE
    var type='ss_info';
    if(settings.type){
      type='ss_'+settings.type;
    }

    //WIDTH
    var width='';
    if(settings.width){
      width = 'width:'+settings.width;
    }


    //CREATE
    html ='<div class="ss_notification '+type+'" style="'+width+'">';
    if(!(settings.icon || settings.icon==false)){
      html+=  '<div class="ssn_icon_wrap">';
      html+=    '<span class="ssn_icon"></span>';
      html+=  '</div>';
    }
    html+=  '<div class="ssn_text_wrap">';
    html+=    '<p class="ssn_text">';
    html+=      settings.text;
    html+=    '</p>';
    html+=  '</div>';
    html+=  '<div class="ssn_close_wrap">';
    html+=    '<button class="ssn_close">×</button>';
    html+=  '</div>';
    html+='</div>';


    //APPEND
    $('body').append(html);


    //ANIMATE
    setTimeout(function(){
      $('.ss_notification').addClass('open');
    },10);

    //AUTO HIDE
    if(settings.timeout){
      setTimeout(function(){
        _this.destroy();
      },settings.timeout);
    }

  },
  destroy:function(){
    $('.ss_notification').removeClass('open');
  }
};
