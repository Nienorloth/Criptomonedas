import React from 'react'

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado);

    return ( 
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
            <p>El precio más alto del día es: <span>{resultado.HIGHDAY}</span></p>
            <p>El precio más bajo del día es: <span>{resultado.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{resultado.LASTUPDATE}</span></p>

        </div>
     );
}
 
export default Cotizacion;