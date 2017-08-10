$(document).ready(function(){
    //Стрелка скрытия и открытия блока статистики
    $('.a-title').click(function(){
        if($('.fa-angle-down').hasClass('active-i')){
            $('.fa-angle-down').removeClass('active-i');
        }else{
            $('.fa-angle-down').addClass('active-i');
        }
    });

    //Стрелка скрытия и открытия блока прямого ефира и записи в дневнике 
    $('.js-a-down-two').click(function(){
        if($('.js-down-two').hasClass('active-i')){
            $('.js-down-two').removeClass('active-i');
        }else{
            $('.js-down-two').addClass('active-i');
        }
    });

    $('.js-a-down-one').click(function(){
        if($('.js-down-one').hasClass('active-i')){
            $('.js-down-one').removeClass('active-i');
        }else{
            $('.js-down-one').addClass('active-i');
        }
    });

    $('.hidden').hide();//скрытие модального окна    
   
    
   
    
$(' .Lightbox li').click(function(){      
       a = $(this).find('img').attr('src');// берем срс по текущей картинки
       $('#lightbox-image').attr('src',a);// вставляем срс в модальное окно
         $('.hidden').show(); // открываем модальное окно        
        $(this).addClass('active').siblings('li').removeClass('active');// добавляем активному ли класс актив
        //btnconstruct(); 
    
  
});
     
    /*function btnconstruct(){
prevImg = $('.active').prev().lenght;
nextImgs = $('.active').next();
        
        alert(prevImg);
    if(prevImg.length == 1)
        {
            $('#lightbox-nav-btnPrev').show();
        }
    else
    {
        $('#lightbox-nav-btnPrev').hide();    
    } 
    if(nextImgs.length == 1)
        {
            $('#lightbox-nav-btnNext').show();
        }
    else
    {
         $('#lightbox-nav-btnNext').hide();    
    }
    }*/
    
$('#lightbox-nav-btnNext').click(function(){
         slider('next');// при клике на некст вызываем функцию с параметром некст
});
    
$('#lightbox-nav-btnPrev').click(function(){
         slider('prev');// при клике на прев вызываем функцию с параметром прев
});
       

function slider (slidePosition)
    {
       
        currentImg=$('.active');// заносим в переменую выборку элемента актив
        if (slidePosition == 'prev')// проверяем на наяность параметра прев
            {
                 nextImg=currentImg.prev().addClass('active').find('img').attr('src');//выборка срс и добавка класса актив прев ли
            }
        else//
            {
                 nextImg=currentImg.next().addClass('active').find('img').attr('src'); //выборка срс и добавка класса актив прев ли
            }
          
         $(currentImg).removeClass('active');//удаляем актив у текущего элемента
        //btnconstruct();
       $('#lightbox-image').attr('src', nextImg);  //  передаем новый срс в модальное окно 
    }
    
     $('#lightbox-secNav').click(function(){
          $('.hidden').hide();
    })
});




