import CL_Equipo from "./CL_Equipo.js";
import CL_IEquipo from "./CL_IEquipo.js";
import CL_Partido from "./CL_Partido.js";
import CL_IPartido from "./CL_IPartido.js";

let iEquipo = new CL_IEquipo(),
equipo = new CL_Equipo(),
salida = document.getElementById("salida");


let opc = 1;
while(opc == 1){
    let iPartido = new CL_IPartido(),
    r = iPartido.leerResultado(),
    partido = new CL_Partido(r);

    equipo.procesarPartido(partido);

    opc = iPartido.solicitarOpcion();
}

salida.innerHTML = iEquipo.reporteEquipo(equipo.partidosGanados(), equipo.partidosPerdidos());