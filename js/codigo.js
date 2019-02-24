

$(document).ready(function(){

    var imgs=$('.img').length;

  contandor=1;
  $('.btn-left').click(function(){
    contandor--
    if(contandor<1){
        contandor=imgs;
        $('.img1').css('display','none');
    }
    $('.img'+(contandor+1)).css('display','none');
    $('.img'+contandor).css('display','block');
    $('.img').removeClass('animated fadeInUp');
    $('.img').addClass('animated fadeInDown');
  });


  $('.btn-right').click(function(){
    contandor++;
    if(contandor>imgs){
        contandor=1;
        $('.img3').css('display','none');
    }
    $('.img'+(contandor-1)).css('display','none');
    $('.img'+contandor).css('display','block');
    $('.img').addClass('animated fadeInUp');
  });




});