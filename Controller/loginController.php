<?php
include("../Datos/DatosGym.php");

$action = $_POST["action"];

switch ($action) {
    case 'validar':
       ValidarUser();
        break;

    default:
        break;
}
function ValidarUser()
{
     $_POST['usuario'];
    $_POST['Contrasena'];
    $d = consulta("*","USUARIOS", "USUARIO ='".$_POST['usuario']."' and CONTRASENA='".$_POST['Contrasena']."'");    
    if(count($d)){
        echo 1;
    }else{
        echo 0;
    }
    
}

