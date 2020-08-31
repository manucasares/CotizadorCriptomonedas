import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export const Result = ({formValues}) => {

    //recuperamos la informacion enviada desde el formulario
    const {moneda, cripto_moneda} = formValues;

    //usamos custom hook useFetch para recibir la data de la API
    const {data, loading, error} = useFetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`);

    //destructuramos Data de data
    const {Data} = !!data && data;

    //conseguimos el array final que tiene la informacion que queremos mostrar
    const arrayData = !!Data && Data.filter(({CoinInfo}) => CoinInfo.Name === cripto_moneda )

    //destructuramos DISPLAY de nuestro array con la data
    const {DISPLAY} = !!arrayData[0] && arrayData[0];

    //acá tuve el problema de que la propiedad de DISPLAY iba a depender de la moneda que se selecciona
    //por eso usé el Object.values... crea un array con los valores de DISPLAY.
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = !!DISPLAY && Object.values(DISPLAY)[0];

    console.log(loading);

    return (
        <>
            {
                loading

                ?

                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>

                :

                <>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='text-light mb-0'>El precio es:</p>
                        <h5 className='text-light'>{PRICE}</h5>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='text-light mb-0'>Precio más alto del día:</p>
                        <h5 className='text-light'>{HIGHDAY}</h5>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='text-light mb-0'>Precio más bajo del día:</p>
                        <h5 className='text-light'>{LOWDAY}</h5>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='text-light mb-0'>Variación:</p>
                        <h5 className='text-light'>%{CHANGEPCT24HOUR}</h5>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='text-light mb-0'>Última actualización:</p>
                        <h5 className='text-light'>{LASTUPDATE}</h5>
                    </div>
                </>
            }
        </>
    )
}
