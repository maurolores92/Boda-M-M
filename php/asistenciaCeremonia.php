<?php
  $to_email = "bodamauymel@gmail.com";
  $subject = "Confirmacion Asistencia";
  $nombreyapellido = $_POST['nombreyapellido'];
  $codigo = $_POST['codigo'];
  $datoimportante = $_POST['datoimportante'];
  $headers = "Nombre y Apellido: ".$nombreyapellido . "\n" . "Codigo de confirmacion: " . $codigo . "\n" . "Dato importante: " . $datoimportante;

  if(mail($to_email, $subject, $headers)) {
    echo '<script language="javascript">
                alert("Tu mensaje fue enviado");
            </script>';
  } else {
    echo '<script language="javascript">
            alert("Error al enviar mensaje. Por favor intenta de nuevo.");
        </script>';
  }
?>