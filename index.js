const fs = require("fs");
const { registrarCita, leerCitas } = require("./operaciones");

const arg = process.argv.slice(2);

const seleccionarOperacion = (alternativa) => {
  if (alternativa === "registrar") {
    registrarCita(arg[1], arg[2], arg[3], arg[4], arg[5]);
  } else if (alternativa === "leer") {
    leerCitas();
  } else {
    console.log("Debes Registrar o leer una cita");
  }
};

seleccionarOperacion(arg[0]);
