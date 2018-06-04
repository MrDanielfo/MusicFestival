/* efecto scroll */ 
document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
     enlace.addEventListener('click', (e) => {
      e.preventDefault();     

     document.querySelector(enlace.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block:  'start'
          })
     })
})

/* cambiar el color del nav */ 
window.onscroll = (e) => {
     const scroll = window.scrollY;
     const header = document.querySelector('#navegacion-principal');
     if( scroll > 350 ) {
          header.classList.add('bg-success');
     } else {
          header.classList.remove('bg-success');
     }
}

$(document).ready(function(){
$('#fecha').countdown('2018/08/23', function(e) {
     $(this).html(e.strftime('<span> %D </span> Días <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos '));
     });
});