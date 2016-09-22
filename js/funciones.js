////////////////////////////////////////////////////////////////////////////////////////////////////////////
function autenticacionGym() {
  $('#consulta').click(function() {
     var con = $("#txtpass").val();
     var user = $("#txtuser").val();
                var parametros = {
                "action": 'validar',
                "usuario" : user,
                "Contrasena": con
        };
        $.ajax({
                data:  parametros,
                url:   '../Controller/loginController.php',
                type:  'post',
                beforeSend: function () {
                       //$("#resultado").html("Procesando, espere por favor...");
                },
                success:  function (response) {
                  if(response==1){
                      location.href="../Views/Inicio.html";
                  }else{
                      alert('Usuario no valido')
                  }
                    //$("#result;ado").html(response);
                }
        });
  });
}

     function guardarDatos()
       {
          var jqxhr = $.post( "../Controller/HomeController.php", $('#form01').serialize(),function() {
            })
              .done(function() {
                alert( "Datos Guardados" );
                location.href="../Views/Inicio.html";
              })
              .fail(function() {
                alert( "error" );
              });
             
       }

function menuinicio()
{
      location.href="../Views/Inicio.html";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////function codeTecla()


function menuOption()
{
	$('#menu').hide(500);
	$('#back').fadeIn(1000);
	$('#contains').animate({'left':'-300px'});
	var menu = document.createElement('div');
	    form01 = document.createElement('a');
	    form02 = document.createElement('a');
      form03 = document.createElement('a');
      form04 = document.createElement('a');
      form05 = document.createElement('a');
	    txt01 = document.createTextNode('Salir');
	    txt02 = document.createTextNode('Datos personales');
      txt03 = document.createTextNode('Problemas de salud');
      txt04 = document.createTextNode('Entrenamiento');
      txt05 = document.createTextNode('Actividad fisica');

	    menu.setAttribute('id','layer01');
	    form01.setAttribute('id','link01');
      form01.href = 'login.html';
	    form02.setAttribute('id','link02');
      form02.href = 'datos-personales.html';
      form03.setAttribute('id','link03');
      form03.href = 'problemas-salud.html';
      form04.setAttribute('id','link04');
      form04.href = 'entrenamientos.html';
      form05.setAttribute('id','link05');
      form05.href = 'actividades-fisicas.html';
		document.body.appendChild(menu);
		menu.appendChild(form01);
		menu.appendChild(form02);
    menu.appendChild(form03);
    menu.appendChild(form04);
    menu.appendChild(form05);
        form01.appendChild(txt01);
        form02.appendChild(txt02);
        form03.appendChild(txt03);
        form04.appendChild(txt04);
        form05.appendChild(txt05);
	$('#layer01').animate({'right':0});
	$('#back').on('click', function(){
      $('#back').hide(500);
      $('#menu').fadeIn(1000);
      $('#contains').animate({'left':0});
      $('#layer01').animate({'right':'-300px'});
      setTimeout(function(){
      $('#layer01').remove();
      },350);
      
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function envioForm01() {
  $('#consulta').click(function() {
     var form0a = document.getElementById('form1').value;
         form0b = document.getElementById('form2').value;
     if(form0a !== '' && form0b !== '') {
        alert('estan todos los campos');
     }
     else {
        if(form0a == '') {
          $('#form1').addClass('error');
          $('#form1').on('focus', function() {
             $(this).removeClass('error');
          });

        }
        if(form0b == '') {
          $('#form2').addClass('error');
          $('#form2').on('click', function() {
             $(this).removeClass('error');
          });
        }
        return false;
     } 
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function openForm02() {
    $('#contains').animate({'left':0});
    $('#layer01').animate({'right':'-300px'});
	  $('#formulario01').fadeIn(1000);
    $('#form01').fadeIn(2500);

    $('#form01').on('mouseover', function(){
      $('.gym').css('opacity','1');
    });

	  $('#form01').on('mouseout', function(){
      $('.gym').css('opacity','0.5');
    });

	  $('#close01').on('click', function(){
  	  $('#back').hide();
  	  $('#menu').show();
      $('#formulario01').fadeOut();
      $('input').removeClass('error').val('');
	  });

	$('.gym').css({
	    position : 'absolute',
      top : ($(window).height() - $('.gym').outerHeight()),
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function envioForm() 
{ 
   var box = document.getElementsByTagName('input');
   for (i = 0; i < box.length; i++) {
       box[i].addEventListener('focus', function(){
        $(this).addClass('select');
       });
       box[i].addEventListener('blur', function(){
       	$(this).removeClass('select');
       });
   }
   $('#consulta-a').click(function() {
      var form01 = document.getElementById('form1-a').value,
          form02 = document.getElementById('form2-a').value,
          form03 = document.getElementById('form3-a').value,
          form04 = document.getElementById('form4-a').value,
          form05 = document.getElementById('form5-a').value;

      /**/
      if(form01 !=='' && form02 !== '' && form03 !== '' && form04 !== '' && form05 !== '' ) {
        alert('envio ok');
      }
      else {
      if(form01 == '') {
        $('#form1-a').addClass('error');  
        $('#form1-a').on('focus', function() {
        $('#form1-a').removeClass('error');
      });
      }
      if(form02 == '') {      
        $('#form2-a').addClass('error');
        $('#form2-a').on('focus', function() {
        $('#form2-a').removeClass('error');
      });    
      }
      if(form03 == '') {
        $('#form3-a').addClass('error');
        $('#form3-a').on('focus', function() {
        $('#form3-a').removeClass('error');
      });
      }
      if(form04 == '') {
        $('#form4-a').addClass('error');
        $('#form4-a').on('focus', function() {
        $('#form4-a').removeClass('error');
      });
      }
      if(form05 == '') {
        $('#form5-a').addClass('error');
        $('#form5-a').on('focus', function() {
        $('#form5-a').removeClass('error');
      });
      }
        return false;
      }   
      
   });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////function codeTecla()
