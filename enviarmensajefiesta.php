<?php
  $to_email = "maurolores1992@gmail.com";
  $subject = "Cancion sugerida para la fiesta";
  $nombre = $_POST['nombre'];
  $cancion = $_POST['cancion'];
  $link = $_POST['link'];
  $headers = "Cancion sugerida por: ".$nombre;
  $mensaje = "Nombre: " . $nombre . "\n" . "cancion: " . $cancion . "\n" . "link: " . $link;

  if(mail($to_email, $subject, $headers, utf8_decode($mensaje))) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar mensaje. Por favor intenta de nuevo.";
  }
?>