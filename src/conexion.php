<?php
class WebApp{
    private $server = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "experiences";
    public $conexion;
    public function __construct()
    {
        $this->conexion = new mysqli($this->server, $this->username, $this->password, $this->database)
        or die(mysql_error());
        $this->conexion->set_charset("utf8");
    }
}
?>