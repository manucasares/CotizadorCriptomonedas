import React, { useState } from "react";

import { Titulo } from "./Titulo";
import { Form } from "./Form";
import { Result } from "./Result";

function App() {

    const [formValues, setFormValues] = useState({
        moneda : '',
        cripto_moneda : ''
    })

    const [result, setResult] = useState(false)

    return (
        <div className='container'>
            <Titulo />

			<div className='row'>

				<div className='col-12 col-lg-6 mb-3'>
                    <Form   setFormValues={setFormValues}
                            setResult={setResult}
                    />
				</div>


				<div className='col-12 col-lg-6 result-container'>
                    {
                        result
                        &&
                        <Result formValues={formValues}
                        />
                    }
				</div>

			</div>
			
        </div>
    );
}

export default App;
