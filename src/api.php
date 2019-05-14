<?php
    // require "conexion.php";
    // header("Access-Control-Allow-Origin: *");

    $conn = new mysqli( 'localhost', 'root','', 'experiences' );
        if ( $conn->connect_error ) {
        die( 'Error al conectarse a la base de datos' );
    }

    $res = array( 'error' => false );
    $action = 'read';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    if($action == 'read'){
        $result = $conexion->query("SELECT * FROM perfil");
        $perfil = array();

        while($row = $result->fetch_assoc()){
            array_push($perfil,$row);
        }
        $res['perfil'] = $perfil;
    }

    if($action == 'create'){
        $nom_perfil = $_POST['name'];
        $email_perfil = $_POST['email'];
        $pass_perfil = md5($_POST['pass']);
        $Tipo_perfil_id_tipoPerfil = 1;
        $Interes_id_interes = 1;

        $result = $conn->query("INSERT INTO perfil(nom_perfil,email_perfil,pass_perfil,Tipo_perfil_id_tipoPerfil,Interes_id_interes)
        VALUES('$nom_perfil','$email_perfil','$pass_perfil','$Tipo_perfil_id_tipoPerfil','$Interes_id_interes')");

        if($result){
            $res['message'] = 'Perfil registrado con éxito';
        } else{
            $res['error'] = true;
            $res['message'] = 'Error para registrar perfil';
        }
    }

    if($action == 'update'){
        $id_perfil = $_POST['id_perfil'];
        $nom_perfil = $_POST['name'];
        $email_perfil = $_POST['email'];
        $pass_perfil = $_POST['pass'];

        $result = $conn->query("UPDATE perfil SET name='$nom_perfil',email='$email_perfil',password='$pass_perfil' WHERE id_perfil=$id_perfil");

        if($result){
            $res['message'] = 'Perfil modificado con éxito';
        } else{
            $res['error'] = true;
            $res['message'] = 'Error para modificar perfil';
        }
    }

    if($action == 'delete'){
        $id_perfil = $_POST['id_perfil'];

        $result = $conn->query("DELETE FROM perfil WHERE id_perfil=$id_perfil");

        if($result){
            $res['message'] = 'Perfil eliminado con éxito';
        } else{
            $res['error'] = true;
            $res['message'] = 'Error para eliminar perfil';
        }
    }

    $conn->close();
    header('Content-type:application/json');
    echo json_encode($res);
?>
