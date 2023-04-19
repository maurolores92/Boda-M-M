<?php
if (isset($_POST['email'])) {

  // Información del correo electrónico
  $destinatario = "bodamauymel@gmail.com";
  $asunto = "Confirmacion de Asistencia";
  $nombre = $_POST['name'];
  $email = $_POST['email'];
  $mensaje = $_POST['message'];

  // Contenido del correo electrónico
  $contenido = "Nombre: " . $nombre . "\n";
  $contenido .= "Correo electrónico: " . $email . "\n";
  $contenido .= "Mensaje: " . $mensaje . "\n";

  // Envío del correo electrónico
  mail($destinatario, $asunto, $contenido);
  
  // Redirección a una página de confirmación
  header('Location: confirmacion.html');
} else {
  // Si el formulario no se envió correctamente, redirige al usuario a la página de origen
  header('Location: formulario.html');
}
?>

<?php
  $to_email = "correo_ejemplo@ejemplo.com";
  $subject = "Nuevo mensaje desde formulario de contacto";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $headers = "From: ".$email;

  if(mail($to_email, $subject, $message, $headers)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar mensaje. Por favor intenta de nuevo.";
  }
?>