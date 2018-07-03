$(document).ready(function(){
    carouselNavegation();
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