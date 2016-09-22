<?php
include("../Datos/DatosGym.php");
$action = $_POST["action"];
switch ($action) {
    case 'guardarBasicos':
       guardarDatosBasicos();
       
        break;

    default:
        break;
}

function guardarDatosBasicos()
{
    $columnas = "nombre,apellidos,edad,identificacion,presion_sanguinea_max,presion_sanguinea_min,estatura,pulsacionesxminuto";
    $valores = "'".$_POST['txtNombre']."','".$_POST['txtapellido']."',".$_POST['txtedad'].",".$_POST['txtidentificacion'].",".$_POST['txtpmaxima'].",".$_POST['txtminima'].",".$_POST['txtaltura'].",".$_POST['pminuto'];
    Insertar($columnas, $valores, "datospersona");
    return 1;
}
