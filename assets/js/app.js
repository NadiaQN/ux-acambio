$(document).ready(function(){
    carouselNavegation();
    $('.slider').slick({
      adaptativeHeight: true,
      autoplay: true,
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      mobilefirst: true,
      accessibility: false,
      dots: true
    });
  });
  
  
  //Carrusel con iconos de navegación

  //Contador de imagenes
  const imgItems = $('.list-images li').length;
  let imgPos = 1;
  
    function carouselNavegation(){
      //estilos css
      $('.list-images, .navegation').css({'list-style' : 'none'});
      //ciclo for para agregar iconos de navegación según la cantidad de img
      for(i = 1; i <= imgItems; i++){
        $('.navegation li:eq(0)').after('<li class="circle iconsDefaultColor"><span class="fas fa-circle"></span></li>');
      }
      //estilos css
      $('.navegation li').css({'display' : 'inline' , 'cursor' : 'pointer' , 'margin' : '.3em', 'font-size' : '12px'});
  
      //Ocultar todas las imagenes
      $('.list-images li').hide();
      //Mostrar la primera imagen por defecto
      $('.list-images li:first').show();
      //Agregar color al icono que representa la primera imagen por defecto
      $('.navegation li span:eq(1)').addClass('iconsNavegationColor');
  
      //Funciones del carrusel
      $('.navegation .circle').click(pagination);
      //carrusel automatico
      setInterval(function(){
        nextSlider()
      }, 4000);
    }
  
  //Definiendo funciones
  function pagination(){
      let paginationPos = $(this).index();
      imgPos = paginationPos;
      $('.list-images li').hide();
      $('.list-images li:nth-child('+ paginationPos +')').fadeIn();
      $('.navegation li span:eq(1)').removeClass('iconsNavegationColor');
      $('.navegation li').addClass('iconsDefaultColor');
      $('.navegation li').removeClass('iconsNavegationColor');
      $('.navegation li:eq('+ (paginationPos) +')').addClass('iconsNavegationColor');
    }
  
    function nextSlider(){
      if(imgPos >= imgItems){
        imgPos = 1;
      }else {
        imgPos ++;
      }
      $('.navegation li span:eq(1)').removeClass('iconsNavegationColor');
      $('.navegation li').addClass('iconsDefaultColor');
      $('.navegation li').removeClass('iconsNavegationColor');
      $('.navegation li:eq('+ (imgPos) +')').addClass('iconsNavegationColor');
      $('.list-images li').hide();
      $('.list-images li:nth-child('+ imgPos +')').fadeIn();
    }

    /* Botones para agregar email y teléfono */

    $('.add-email').click(function(){
      $('#email').before('<input type="email" class="form-control" aria-describedby="email">');
    })
    $('.add-phone').click(function(){
      $('#phone').before('<input type="text" class="form-control" aria-describedby="phone">');
    })

    /* Mensaje formulario enviado */

    $('.send').click(function(){
      if($('#name').val() != 0 && $('#empresa').val() != 0 && $('#email').val() != 0) {
        $('.modal-body').empty();
        $('.modal-body').append('<img src="assets/img/aCambio-06.jpg" alt=""><p>Gracias por tu intéres en aCambio. Enviaremos un mensaje a tu casilla de correo. ¡Pronto nos contactaremos contigo!</p>')
      }
      
    })