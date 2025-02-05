export default class CL_IPartido{

    leerResultado(){
        return prompt("Ingresa el resultado del partido");
    }

    solicitarOpcion(){
        return prompt("Desea procesar otro resultado de un partido?: 1-->Si 2-->No");
    }

    
}