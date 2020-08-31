import React, { useState } from "react";
import { useForm } from "../Hooks/useForm";
import { Validation } from "./Validation";

export const Form = ({setFormValues, setResult}) => {

    const [validation, setValidation] = useState(false)

    const [{moneda, cripto_moneda}, handleInputChange] = useForm({
        moneda : '',
        cripto_moneda : ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!moneda.trim() || !cripto_moneda.trim()){
            console.log('validacion');
            setValidation(true);
            return;
        }
        setValidation(false);

        setFormValues(p => {
            return{
                moneda,
                cripto_moneda
            }
        })

        setResult(true);

    }

    return (
        <>
            {
                validation
                &&
                <Validation />
            }

            <form onSubmit={handleSubmit}>
                {/* MONEDA */}
                <div>
                    <p className='text-light mb-0'>Elegí tu moneda</p>
                    <select className='custom-select mb-3'
                            onChange={handleInputChange}
                            name='moneda'
                            value={moneda}
                    >
                        <option value={''}>--Seleccione--</option>
                        <option value='USD'>Dólar</option>
                        <option value='ARS'>Peso argentino</option>
                        <option value='MXN'>Peso mexicano</option>
                        <option value='EUR'>Euro</option>
                    </select>
                </div>
    
                {/* CRIPTOMONEDA */}
                <div>
                    <p className='text-light mb-0'>Elegí tu criptomoneda</p>
                    <select className='custom-select mb-2'
                            onChange={handleInputChange}
                            name='cripto_moneda'
                            value={cripto_moneda}
                    >
                        <option value={''}>--Seleccione--</option>
                        <option value='BTC'>Bitcoin</option>
                        <option value='XRP'>XRP</option>
                        <option value='ETH'>Ethereum</option>
                        <option value='BCH'>Bitcoin Cash</option>
                        <option value='CRO'>Crypto.com Chain Token</option>
                        <option value='LINK'>Chain link</option>
                        <option value='HYN'>Hyperion</option>
                        <option value='USDT'>Tether</option>
                        <option value='HMR'>Homeros</option>
                        <option value='BCH'>Bitcoin Cash</option>
                    </select>
                </div>
    
                <button type='submit'
                        className='btn btn-block btn-outline-primary'
                >
                    Calcular
                </button>
            </form>
        </>
    )
};
