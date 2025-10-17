// console.log("Hola mundo");

//crear un programa que identifique cuantos multiplos de 3 ahi en un rango del 0 al 100 y que imprima

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
//     }
    
// }

import os from "os"

function SistemaOperativo() {
    console.log(os);
console.log(os.arch()); //Arquitectura del computador
console.log(os.availableParallelism()); //Numero estimado de nucleos
console.log(os.cpus()); //Informacion de la cpu
console.log(os.endianness()); //Orden en que se almacenan los bytes
console.log(os.platform()); //Plataforma que usa el computador
console.log(os.hostname()); //Nombre de usuario del computador
const memoria = os.freemem() / 1024
console.log(memoria / 1024)
console.log(os.getPriority()); //Obtiene la prioridad del sistema
console.log(os.homedir()); //Disco principal
console.log(os.loadavg()); //Promedio de carga del sistema
console.log(os.networkInterfaces()); //Información de red
console.log(os.release()); //La version de windows
console.log(os.tmpdir()); //Ruta de archivos temporales
console.log(os.totalmem()); //Total de la memoria
console.log(os.type()); //Imprime el tipo de sistema operativo
console.log(os.userInfo()); //Informacion del usuario
console.log(os.version()); //La version de windows
console.log(os.machine()); //Arquitectura de hardware
}

SistemaOperativo()