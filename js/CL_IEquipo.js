export default class CL_IEquipo{

    reporteEquipo(pg, pp){
        return`
        <br>Reporte del equipo
        <br>Porcentaje de partidos ganados ${pg}
        <br>Porcentaje de partidos perdidos ${pp}
        `
    }
}