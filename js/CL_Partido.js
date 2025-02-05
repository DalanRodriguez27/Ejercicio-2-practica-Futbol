export default class CL_Partido{
    constructor(resultado){
        this.resultado = resultado;
    }

    set resultado(r){
        return this._resultado = r;
    }


    get resultado(){
        return this._resultado;
    }

    
}