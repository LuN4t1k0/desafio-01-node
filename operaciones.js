const fs = require("fs");
const { uid } = require("uid");

const registrarCita = ( name, age, type, color, illness ) => {
  let fecha = new Date();
  const archivo = fs.readFileSync("citas.json", "utf8");
  const dataExistente = JSON.parse(archivo);

  const nuevaCita = {
    id: uid(),
    name,
    age,
    type,
    color,
    illness,
    reservedAT: `${fecha.toLocaleDateString()}, ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
  };
  fs.writeFileSync("citas.json", JSON.stringify([...dataExistente, nuevaCita]));
};

const leerCitas = () => {
  const archivo = fs.readFileSync("citas.json", "utf8");
  JSON.parse(archivo).forEach((x) => console.log(x));
};

module.exports = {
  registrarCita,
  leerCitas,
};
