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
      
      function cargarListaActividades()
      {
        $('#Actividades *').remove();
        $('#Actividades').append('<option value="0">Seleccione uno...</option>');
        $.post('../Controller/HomeController.php',{ action: "cargarListaActividades"}, function (response) {
                    var obj = jQuery.parseJSON(response)
                    $.each(obj, function (key, val) {
                        $('#Actividades').append('<option value="' + val.idactividad + '">' + val.descripcion + '</option>'); 
                    });
        });
      }
      
   function cargarListaNiveles()
      {
        $('#nivel *').remove();
        $('#nivel').append('<option value="0">Seleccione uno...</option>');
        $.post('../Controller/HomeController.php',{ action: "cargarListaNivel"}, function (response) {
                    var obj = jQuery.parseJSON(response)
                    $.each(obj, function (key, val) {
                        $('#nivel').append('<option value="' + val.idnivel + '">' + val.descripcion + '</option>'); 
                    });
        });
      }

function AgregarListaTabla()
{
    if($("#TipoEnfermedades").val() !== "0")
    var nuevoRegistro;
    nuevoRegistro = "<tr>";
    nuevoRegistro+="<td><input type='hidden' id='ids' name='ids[]' value="+$("#TipoEnfermedades").val()+"> "+$("#TipoEnfermedades  option:selected").text()+"</td>";
    nuevoRegistro+="<td><input type='hidden' id='idaname' name='idaname[]' value="+$("#salud01").val()+"> "+$("#salud01").val()+"</td> <tr>";
    $("#tablaEnfermedades").append(nuevoRegistro);
    
}

function AgregarListaTablaActividades()
{
    if($("#Actividades").val() !== "0")
    var nuevoRegistro;
    nuevoRegistro = "<tr>";
    nuevoRegistro+="<td><input type='hidden' id='ids' name='ids[]' value="+$("#Actividades").val()+"> "+$("#Actividades  option:selected").text()+"</td>";
     nuevoRegistro+="<td><input type='hidden' id='idatime' name='idatime[]' value="+$("#textTiempo").val()+"> "+$("#textTiempo").val()+"</td>";
    nuevoRegistro+="<td><input type='hidden' id='idaname' name='idaname[]' value="+$("#textdescripcion").val()+"> "+$("#textdescripcion").val()+"</td></tr>";
   
    $("#tablaActividades").append(nuevoRegistro);
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

function guardarActividades()
{
    var jqxhr = $.post( "../Controller/HomeController.php", $('#form03').serialize(),function() {
            })
              .done(function() {
                alert( "Datos Guardados" );
                //location.href="../Views/Inicio.html";
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

function generarEntrenamiento()
{
      $.post('../Controller/HomeController.php',$('#form03').serialize(), function (response) {
          $("#tablaEntrenamientos").empty();
          var obj = jQuery.parseJSON(response);
                    $.each(obj, function (key, val) {
           var nuevoRegistro;
           nuevoRegistro = "<tr>";
           nuevoRegistro+="<td><input type='hidden' id='ids' name='ids[]' value="+val.dia+"> "+val.dia+"</td>";
           nuevoRegistro+="<td><input type='hidden' id='idaname' name='idaname[]' value="+val.descripcion+"> "+val.descripcion+"</td>";
           nuevoRegistro+="<td><input type='hidden' id='idacalorias' name='idacalorias[]' value="+val.caloriasminuto+"> "+val.caloriasminuto+"</td> <tr>";
                        $("#tablaEntrenamientos").append(nuevoRegistro);
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////function codeTecla()
