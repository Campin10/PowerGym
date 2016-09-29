<?php
session_start();
function Conectarse() {
    $servername = "localhost";
    $username = "admin";
    $password = "campos";
    $database = "masterbase";
    mysql_connect($servername, $username, $password);
    mysql_select_db($database);
}

function consulta($campos, $tabla, $condicion) {

    $cadena = "select " . $campos . " from " . $tabla." WHERE ".$condicion;
    if($condicion!= NULL)
    {
        $cadena = "select " . $campos . " from " . $tabla." WHERE ".$condicion;
    }
 else {
        $cadena = "select " . $campos . " from " . $tabla;
    }
    Conectarse();
    $result = mysql_query($cadena);
    $datos = array();
    $j = 0;
    if(!empty($result))
    while ($row = mysql_fetch_array($result)) {
        if ($j == 0) {
            foreach ($row as $key => $value) {
                if (!is_numeric($key))
                    $d[] = $key;
            }
        }
        for ($i = 0; $i < count($d); $i++) {
            $datos[$j][$d[$i]] = $row[$d[$i]];
        }
        $j++;
    }
    return $datos;
}

function consultasql($cadena)
{
      Conectarse();
    $result = mysql_query($cadena);
    $datos = array();
    $j = 0;
    if(!empty($result))
    while ($row = mysql_fetch_array($result)) {
        if ($j == 0) {
            foreach ($row as $key => $value) {
                if (!is_numeric($key))
                    $d[] = $key;
            }
        }
        for ($i = 0; $i < count($d); $i++) {
            $datos[$j][$d[$i]] = $row[$d[$i]];
        }
        $j++;
    }
    return $datos;
    
}

function Insertar($campos, $valores, $tabla) {
    
    $cadena = "insert into " . $tabla . " (" . $campos . ") values " . " (" . $valores . ")";
    Conectarse();
    mysql_query($cadena);
}

function Actualizar($campos, $tabla, $valores, $condicion) {
    $cadena = "Update " . $tabla . " SET";
    $vals = explode(",", $valores);
    $columns = explode(",", $campos);
    for ($i; $i < count($vals); $i++) {
        $cadencompu = $vals[$i] . " = " . $columns[$i];
        $cadena = $cadena . " " . $cadencompu;
        if ($i != count($vals)) {
            $cadena = $cadena . ",";
        }
    }
    $cadena = $cadena . "where " . $condicion;
    mysql_query($cadena);
}
