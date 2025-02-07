import CL_Equipo from "./CL_Equipo.js";
import CL_Partido from "./CL_Partido.js";

let partido1 = new CL_Partido(1);
let partido2 = new CL_Partido(1);
let partido3 = new CL_Partido(0);
let partido4 = new CL_Partido(1);
let partido5 = new CL_Partido(0);
let partido6 = new CL_Partido(1);

let equipo = new CL_Equipo();

equipo.procesarPartido(partido1);
equipo.procesarPartido(partido2);
equipo.procesarPartido(partido3);
equipo.procesarPartido(partido4);
equipo.procesarPartido(partido5);
equipo.procesarPartido(partido6);

let salida = document.getElementById("salida");

salida.innerHTML =`
<br>El equipo gano el: ${equipo.partidosGanados()} de los partidos jugados`
