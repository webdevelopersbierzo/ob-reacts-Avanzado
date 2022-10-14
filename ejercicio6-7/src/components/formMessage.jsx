import React from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater'

const FormMessage = (props) => {

    const{newServiceWorkerDetected, onLoadNewServiceWorkerAccept} = props;

    return (
        <div>
            <h1>Ejercicio 6-7</h1>
            {newServiceWorkerDetected && <div>
                <h3>Nueva Actualizacion ¡ Quieres actualizar?</h3>
                <button onClick={onLoadNewServiceWorkerAccept}>Actualizar</button>
            </div>

            }


        </div>
    );
}

export default withServiceWorkerUpdater(FormMessage);
