////////////////////////////////////////////////////////////////////////////////////////////////////////////
function autenticacionGym() {
  $('#consulta').click(function() {
     var con = $("#txtpass").val();
     var user = $("#txtuser").val();
                var parametros = {
                "action": 'validar',
                "usuario" : user,
                "Contrasena": con };
        $.ajax({
                data:  parametros,
                url:   '../Controller/loginController.php',
                type:  'post',
                success:  function (response) {
                  if(response==1){
                      location.href="../Views/Inicio.html";
                  }else{
                      alert('Usuario no valido')
                  }
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

function cargarLista()
      {
        $('#TipoEnfermedades *').remove();
        $('#TipoEnfermedades').append('<option value="0">Seleccione uno...</option>');
        $.post('../Controller/HomeController.php',{ action: "cargarListaEnfermedades"}, function (response) {
                    var obj = jQuery.parseJSON(response)
                    $.each(obj, function (key, val) {
                        $('#TipoEnfermedades').append('<option value="' + val.idEnfermedad + '">' + val.descripcion + '</option>'); 
                    });
        })
      }

function AgregarListaTabla()
{
    if($("#TipoEnfermedades").val() !== null)
    var nuevoRegistro;
    nuevoRegistro = "<tr>";
    nuevoRegistro+="<td><input type='hidden' id='ids' name='ids[]' value="+$("#TipoEnfermedades").val()+"> "+$("#TipoEnfermedades  option:selected").text()+"</td>";
    nuevoRegistro+="<td><input type='hidden' id='idaname' name='idaname[]' value="+$("#salud01").val()+"> "+$("#salud01").val()+"</td> <tr>";
    $("#tablaEnfermedades").append(nuevoRegistro);
    
}

function GuardarEnfermedades()
{
      var jqxhr = $.post( "../Controller/HomeController.php", $('#salud-form').serialize(),function() {
            })
              .done(function() {
                alert( "Datos Guardados" );
                location.href="../Views/Inicio.html";
              })
              .fail(function() {
                alert( "error" );
              }); 
}

function cargarValoresEnfermedades()
{
    $.post('../Controller/HomeController.php',{ action: "EnfermedadesTabla"}, function (response) {
         var obj = jQuery.parseJSON(response);
                    $.each(obj, function (key, val) {
           var nuevoRegistro;
           nuevoRegistro = "<tr>";
           nuevoRegistro+="<td><input type='hidden' id='ids' name='ids[]' value="+val.idEnfermedad+"> "+val.descripcion+"</td>";
           nuevoRegistro+="<td><input type='hidden' id='idaname' name='idaname[]' value="+val.Descripcion+"> "+val.Descripcion+"</td> <tr>";
           $("#tablaEnfermedades").append(nuevoRegistro);
                    });
            });
}

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////function codeTecla()
