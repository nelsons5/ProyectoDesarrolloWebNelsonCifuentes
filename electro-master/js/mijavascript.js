/*EFECTO PARA LA FOTO PRINCIPAL 
BIGIMG HACE UN POCO MAS GRANDE Y CAMBIA EL TIPO Y COLOR DEL BORDE
NORMALIMG DEVUELVE LA FOTO A LA NORMALIDAD*/
function bigImg(x) {
    x.style.height = "265px";
    x.style.width = "255px";
    x.style.border="dotted 5px red"
  }
  
  function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "240px";
    x.style.border=""
    x.style.borderTop= "5px inset red";
    x.style.borderBottom = "5px outset black";
  }


  $(document).ready(function() {
    $("#proyectTabs").tabs();

   });