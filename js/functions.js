function myFunction() {
    var x = document.getElementById("programacion");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
} 

$("#datetime").datetimepicker({
    format: 'dd-mm-yyyy hh:ii',
    autoclose: true,
    todayBtn: true,
    locale: 'es'
});

function validarFecha() {
  if(document.getElementById("fecha-envio").value !== "") {

    let fecha = document.getElementById("fecha-envio").value;
    console.log(fecha);
    let hora = fecha.split(" ")[1];
    let nuevaFecha = fecha.split(" ")[0].split("-").reverse().join("-");

    let nuevaFechaHora = nuevaFecha + " " +hora
    console.log(nuevaFechaHora);

    let envio = new Date(nuevaFechaHora);
    let actual = new Date();

    console.log(envio);
    console.log(actual);

    if(envio < actual) {
      alert("Error la programacion debe ser mayor a la fecha y hora actual");
      document.getElementById("fecha-envio").value="";
    }
  }
}
