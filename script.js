precio = document.getElementById("txt_precio").innerText;
resumen = document.getElementById("btn_resumen");
borrar = document.getElementById("btn_borrar");

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
email = document.getElementById("email");

resumen.addEventListener("click", () => {
  let lista = [];

  cantidad = document.getElementById("cantidad").value;
  categoria = document.getElementById("categoria").value;
  document.getElementById("precioPagar").innerText = calcular(precio, cantidad, categoria);

  if (nombre.value === ""){
    lista.push("Nombre");
  }

  if (apellido.value === ""){
    lista.push("Apellido");
  }

  if (email.value === ""){
    lista.push("Email");
  }

  if (lista != ""){
    alert("Falta completar los siguientes campos: " + lista);
  }
  lista.splice(0, lista.length);
});

borrar.addEventListener("click", () => {
  document.getElementById("cantidad").value = "1";
  document.getElementById("precioPagar").innerText = 0;
});

function calcular(precio, cantidad, categoria) {
  monto_total = precio * cantidad;
  descuento = (monto_total * categoria) / 100;
  return monto_total - descuento;
}
