<?php

$destino = "maurolores1992@gmail.com";
$asunto = 'Cancion sugerida para la fiesta';

$nombre = $_POST ['nombre'];
$cancion = $_POST ['cancion'];
$link = $_POST ['link'];

$header = "Cancion sugerida para la fiesta";
$mensaje = "Nombre: " . $nombre . "\n" . "Cancion: " . $cancion . "\n" . "link: " . $link . "\n" .;

mail($destino, $header, utf8_decode($mensaje));

?>
