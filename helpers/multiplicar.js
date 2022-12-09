const fs = require('fs');
const colors = require('colors');

//const crearArchivo = ( base=5 ) => {  // Para formar original y promesa
const crearArchivo = async( base=5, listar = false, hasta = 10 ) => {


    //Forma Original
    //    console.log(' =================== ');
    //    console.log('    Tabla del:', base);
    //    console.log(' =================== ');

    //    let salida = '';

    //    for( let i = 1; i<=10; i++ ) {
    //        salida += `${ base } X ${ i } = ${ base * 1 }\n`;
    //    }

    //    console.log(salida);

    //    fs.writeFileSync( `tabla-${base}.txt`, salida);

    //    console.log(`tabla-${ base }.txt creado`);



    //Promesa
    //return new Promise((resolve, reject) => {

    //    console.log(' =================== ');
    //    console.log('    Tabla del:', base);
    //    console.log(' =================== ');

    //    let salida = '';

    //    for( let i = 1; i<=10; i++ ) {
    //        salida += `${ base } X ${ i } = ${ base * 1 }\n`;
    //    }

    //    console.log(salida);

    //    fs.writeFileSync( `tabla-${base}.txt`, salida);

    //    resolve(`tabla-${ base }.txt`);

    //})


    //Sync

        try{
            

            let salida, consola = '';

            for( let i = 1; i<=hasta; i++ ) {
                salida += `${ base } X ${ i } = ${ base * i }\n`;
                consola  += `${ base } ${ 'X'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            }

            if( listar ) {
                console.log(' =================== '.green);
                console.log('    Tabla del:'.green, colors.blue( base ) );
                console.log(' =================== '.green);
                console.log(consola);
            }

            

            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

            return `tabla-${ base }.txt`;
        } catch (err){
            throw err;
        }
        
        

    
}




module.exports = {
    crearArchivo
}