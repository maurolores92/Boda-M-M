const deadline = '2023-12-15T21:30:00Z'; //variable para el formato de fecha
const btnAgendar = document.getElementById('btn-agendar-conferencia'); //boton para agendar conferencia
const openFormBtn4 = document.querySelector('#open-form-btn4'); //formulario asistencia conferencia
const formModal4 = document.querySelector('#form-modal4'); //formulario asistencia conferencia
const closeBtn4 = document.querySelector('.close4'); //formulario asistencia conferencia
const openFormBtn5 = document.querySelector('#open-form-btn5'); //formulario asistencia fiesta
const formModal5 = document.querySelector('#form-modal5'); //formulario asistencia fiesta
const closeBtn5 = document.querySelector('.close5'); //formulario asistencia fiesta
const openFormBtn3 = document.querySelector('#open-form-btn3'); //formulario para sugerir cancion
const formModal3 = document.querySelector('#form-modal3'); //formulario para sugerir cancion
const closeBtn3 = document.querySelector('.close3'); //formulario para sugerir cancion
const openInfoBtn = document.querySelector('#open-info-btn'); //modal tips
const infoModal = document.querySelector('#info-modal'); //modal tips
const closeBtn = document.querySelector('.close1'); //modal tips
var boton = document.getElementById("boton"); //play - pause
var v = document.getElementsByTagName("audio")[0]; //play - pause
var sound = false; //play - pause
let slideIndex = 0; // CARROUSEL
let slideIndex2 = 0; // CARROUSEL

var codigos = ["qwert", "asdf", "zxcv"];
    var codigoIcon = document.getElementById("codigo-icon");

//CUENTA REGRESIVA PARA LA FIESTA
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

//BOTON PARA LLEGAR AL LUGAR DE LA BODA EN EL SALON
function openMapsConferencia() {
  var direccion = "Cramer 2880 belgrano CABA";
  var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
  window.open(mapsUrl, "_blank");
}

//BOTON PARA LLEGAR AL LUGAR DE LA BODA FIESTA
function openMapsFiesta() {
  var direccion = "Av. 101 Dr. Ricardo Balbín 5580, Billinghurst, Provincia de Buenos Aires, Argentina";
  var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
  window.open(mapsUrl, "_blank");
}

// MODAL PARA CONFIRMAR ASISTENCIA CONFERENCIA
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
  setTimeout(showSlides,40000);
}
showSlides();

//play - pause cancion
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

// VERIFICACION DE CODIGOS

function verificarCodigo(codigoInput) {
  var codigoEncontrado = codigos.includes(codigoInput);

  if (codigoEncontrado) {
    codigoIcon.className = "icon icon-check";
  } else {
    codigoIcon.className = "icon icon-x";
  }
}

verificarCodigo(codigoInput)

