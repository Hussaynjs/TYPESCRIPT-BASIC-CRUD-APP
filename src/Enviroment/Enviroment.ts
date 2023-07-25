import { DevEnviromentVariables } from "./Enviroment.Dev";
import { ProdEnviromentVariables } from "./Enviroment.Prod";


export function getEnviromentVariables(){
    if(process.env.NODE_ENV === 'production'){
        return ProdEnviromentVariables
    }
    return DevEnviromentVariables
}