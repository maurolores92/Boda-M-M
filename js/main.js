
//CUENTA REGRESIVA PARA LA FIESTA
const deadline = '2023-12-15T21:30:00Z';

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('#days');
  const hoursSpan = clock.querySelector('#hours');
  const minutesSpan = clock.querySelector('#minutes');
  const secondsSpan = clock.querySelector('#seconds');
  
  function updateClock() {
    const t = getTimeRemaining(endtime);
    
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

initializeClock('countdown', deadline);

//BOTON PARA AGENDAR LA BODA EN EL SALON

// Obtener el botón
const btnAgendar = document.getElementById('btn-agendar-conferencia');

// Agregar un evento de clic al botón
btnAgendar.addEventListener('click', () => {
  // Fecha y hora del evento (formato UTC)
  const fechaHoraEvento = '2023-12-15T20:00:00Z';
  
  // Título del evento
  const tituloEvento = 'Conferencia de Boda M&M';
  
  // Descripción del evento
  const descripcionEvento = 'Conferencia de boda de Mauricio Y Melisa';
  
  // Ubicación del evento
  const ubicacionEvento = 'Cramer 2880 Salon del reino de los testigos de Jehova';
  
  // Enlace para agendar el evento en Google Calendar
  const enlaceAgendar = `https://calendar.google.com/calendar/r/eventedit?text=${tituloEvento}&details=${descripcionEvento}&location=${ubicacionEvento}&dates=${fechaHoraEvento}/${fechaHoraEvento}`;
  
  // Redirigir al enlace para agendar el evento
  window.location.href = enlaceAgendar;
});



//BOTON PARA LLEGAR AL LUGAR DE LA BODA EN EL SALON

function openMapsConferencia() {
  // Dirección del sitio
  var direccion = "Cramer 2880 belgrano CABA";

  // Generar la URL de Google Maps con la dirección
  var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);

  // Abrir la URL en una nueva pestaña
  window.open(mapsUrl, "_blank");
}

//BOTON PARA LLEGAR AL LUGAR DE LA BODA FIESTA

function openMapsFiesta() {
  // Dirección del sitio
  var direccion = "Av. 101 Dr. Ricardo Balbín 5580, Billinghurst, Provincia de Buenos Aires, Argentina";

  // Generar la URL de Google Maps con la dirección
  var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);

  // Abrir la URL en una nueva pestaña
  window.open(mapsUrl, "_blank");
}

// MODAL PARA CONFIRMAR ASISTENCIA CONFERENCIA

const openFormBtn4 = document.querySelector('#open-form-btn4');
const formModal4 = document.querySelector('#form-modal4');
const closeBtn4 = document.querySelector('.close4');

openFormBtn4.addEventListener('click', () => {
  formModal4.style.display = 'block';
});

closeBtn4.addEventListener('click', () => {
  formModal4.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == formModal4) {
    formModal4.style.display = 'none';
  }
});

// MODAL PARA CONFIRMAR ASISTENCIA FIESTA

const openFormBtn5 = document.querySelector('#open-form-btn5');
const formModal5 = document.querySelector('#form-modal5');
const closeBtn5 = document.querySelector('.close5');

openFormBtn5.addEventListener('click', () => {
  formModal5.style.display = 'block';
});

closeBtn5.addEventListener('click', () => {
  formModal5.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == formModal5) {
    formModal5.style.display = 'none';
  }
});


// MODAL PARA SUGERIR CANCION

const openFormBtn3 = document.querySelector('#open-form-btn3');
const formModal3 = document.querySelector('#form-modal3');
const closeBtn3 = document.querySelector('.close3');

openFormBtn3.addEventListener('click', () => {
  formModal3.style.display = 'block';
});

closeBtn3.addEventListener('click', () => {
  formModal3.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == formModal3) {
    formModal3.style.display = 'none';
  }
});


// MODAL TIPS

const openInfoBtn = document.querySelector('#open-info-btn');
const infoModal = document.querySelector('#info-modal');
const closeBtn = document.querySelector('.close1');

openInfoBtn.addEventListener('click', () => {
  infoModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  infoModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == infoModal) {
    infoModal.style.display = 'none';
  }
});



// CARROUSEL

const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slider-button');
const sliderImages = document.querySelector('.slider-images');

let index = 0;

function setActiveButton() {
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

let slideIndex = 0;

// funcion para el slider
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
      slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,6000);
}
showSlides();


var boton = document.getElementById("boton");
var v = document.getElementsByTagName("audio")[0];
var sound = false;

boton.addEventListener("click", function(){
  if (!sound) {
    v.play();
    this.innerHTML = '<i class="bi bi-pause-circle"></i>';
    sound = true;
  } else {
    v.pause();
    this.innerHTML = '<i class="bi bi-play-circle">';
    sound = false;
  } 
});