<?php
include("../Datos/DatosGym.php");
$action = $_POST["action"];
switch ($action) {
    case 'guardarBasicos':
       guardarDatosBasicos();
       
        break;
    case 'cargarListaEnfermedades':
        cargarlistEnfermedades();
        break;
    case 'guardarEnfermedades':
        guardarEnfermedad();
        break;
    case 'EnfermedadesTabla':
        cargarEnfermedades();
        break;
case 'cargarListaActividades':
    cargarlistActividad();
        break;
    
    default:
        break;
}

function cargarlistActividad()
{
    $columnas = "idactividad,descripcion";
    $valores = consulta($columnas, "actividades", "");
    $res = json_encode($valores);
    return $res;
}

function cargarEnfermedades()
{
    $valores = consultasql("SELECT e.idEnfermedad,e.descripcion,eu.Descripcion from enfermedades e inner join enfermedadesusuario eu on e.idEnfermedad = eu.idEnfermedad where eu.idUsuario = ".$_SESSION["idUseru"]);
     $res = json_encode($valores);
     echo $res;
    return $res;
}

function guardarDatosBasicos()
{
    $columnas = "nombre,apellidos,edad,identificacion,presion_sanguinea_max,presion_sanguinea_min,estatura,pulsacionesxminuto";
    $valores = "'".$_POST['txtNombre']."','".$_POST['txtapellido']."',".$_POST['txtedad'].",".$_POST['txtidentificacion'].",".$_POST['txtpmaxima'].",".$_POST['txtminima'].",".$_POST['txtaltura'].",".$_POST['pminuto'];
    Insertar($columnas, $valores, "datospersona");
    return 1;
}

function cargarlistEnfermedades()
{
    $columnas = "idEnfermedad,descripcion";
    $valores = consulta($columnas, "enfermedades", "");
    $res = json_encode($valores);
    echo $res;
    return $res;
}

function guardarEnfermedad()
{
    $columnas = "idUsuario,idEnfermedad,Descripcion";
    $valoresid = $_POST['ids'];
    $valoresdes = $_POST['idaname'];
    
    $cont = 0;
    foreach ($valoresid as &$valor) {
        if($valor != "")
        {
    $valores = $_SESSION["idUseru"].",".$valor.",".$valoresdes[$cont];
    Insertar($columnas, $valores, "enferme;dadesusuario");
        }
    $cont = $cont + 1;
    }

}