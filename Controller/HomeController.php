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
 case 'guardarActividades':
        guardarActividad();
        break;
    case 'cargarListaNivel':
        cargarNiveles();
        break;
    case 'generarentrenamientos':
        generacionEntrenamientos();
        break;
    case 'cargarvistaEn':
        calcularEntrenamientoRecomendado();
        break;
    default:
        break;
}

function calcularEntrenamientoRecomendado()
{
     $_SESSION["nivelses"] = $_POST["nivel"];
}

function generacionEntrenamientos()
{
    $nivel = $_POST["nivel"];
    $valores = consultasql("SELECT e.idEjercicio,e.descripcion,e.caloriasminuto,e.idMusculo from catejercicios e LEFT OUTER JOIN rel_enfermedad_ejercicio r on e.idEjercicio = r.idejercicio LEFT OUTER JOIN (SELECT * FROM enfermedadesusuario WHERE idUsuario = ".$_SESSION["idUseru"].") eu on r.idenfermedad = eu.idEnfermedad WHERE r.idenfermedad IS null "); 
    $contador = 1;
    $limite = 5;
    $res = null;
    $factor = 2;
    if($nivel == 2)
    {
    $factor = 3;
    }
    if($nivel == 3)
    {
    $factor = 4;
    }
    if($nivel == 4)
    {
    $factor = 4;
    }
    
        $valor[] = NULL;
        for ($i = 0; $i <= $limite * $factor; $i+=$factor)
        {
            for ($j = $i; $j < $i + $factor; $j++)
          {
           $valor[$j]["descripcion"] = $valores[$j]["descripcion"];
           $valor[$j]["caloriasminuto"] = $valores[$j]["caloriasminuto"];
           $valor[$j]["dia"] = $contador;
          }
           $contador = $contador + 1;
        }
        $res = json_encode($valor);
        echo $res;
    
    return $res;
}

function cargarNiveles()
{
    $columnas = "idnivel,descripcion";
    $valores = consulta($columnas, "niveles", "");
    $res = json_encode($valores);
    echo $res;
    return $res;
}

function cargarlistActividad()
{
    $columnas = "idactividad,descripcion";
    $valores = consulta($columnas, "actividades", "");
    $res = json_encode($valores);
    echo $res;
    return $res;
}

function cargarlistEnfermedades()
{
    $columnas = "idEnfermedad,descripcion";
    $valores = consulta($columnas, "enfermedades", "");
    $res = json_encode($valores);
    echo $res;
    return $res;
}

function cargarEnfermedades()
{
    $valores = consultasql("SELECT e.idEnfermedad,e.descripcion,eu.Descripcion from enfermedades e inner join enfermedadesusuario eu on e.idEnfermedad = eu.idEnfermedad where eu.idUsuario = ".$_SESSION["idUseru"]);
    $res = json_encode($valores);
    return $res;
}

function guardarDatosBasicos()
{
    $columnas = "nombre,apellidos,edad,identificacion,presion_sanguinea_max,presion_sanguinea_min,estatura,pulsacionesxminuto";
    $valores = "'".$_POST['txtNombre']."','".$_POST['txtapellido']."',".$_POST['txtedad'].",".$_POST['txtidentificacion'].",".$_POST['txtpmaxima'].",".$_POST['txtminima'].",".$_POST['txtaltura'].",".$_POST['pminuto'];
    Insertar($columnas, $valores, "datospersona");
    return 1;
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
    Insertar($columnas, $valores, "enfermedadesusuario");
        }
    $cont = $cont + 1;
    }

}

function guardarActividad()
{
    $columnas = "idusuario,idactividad,tiempo,descripcion";
    $valoresid = $_POST['ids'];
    $valoresdes = $_POST['idaname'];
    $valoresTime = $_POST['idatime'];
    
    $cont = 0;
    foreach ($valoresid as &$valor) {
        if($valor != "")
        {
    $valores = $_SESSION["idUseru"].",".$valor.",".$valoresTime[$cont].",'".$valoresdes[$cont]."'";
    echo $valores;
    echo $columnas;
    Insertar($columnas, $valores, "actividadesusuario");
        }
    $cont = $cont + 1;
    }
}