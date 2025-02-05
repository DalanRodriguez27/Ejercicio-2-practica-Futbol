export default class CL_Equipo{
    constructor(){
        this.cntPartidos = 0;
        this.cntGanados = 0;
        this.cntPerdidos = 0;
    }

    procesarPartido(partido){
        this.cntPartidos++;

        if(partido.resultado == "1"){
            this.cntGanados++;
        }

        if(partido.resultado == "0"){
            this.cntPerdidos++;
    }
}

partidosGanados(){
    if(this.cntPartidos > 0){
        return (this.cntGanados / this.cntPartidos *100) + "%";
}
else{
    return 0;
}
}

partidosPerdidos(){
    if(this.cntPartidos > 0){
        return (this.cntPerdidos / this.cntPartidos *100) + "%";
}   
else{
    return 0;
}
}

}