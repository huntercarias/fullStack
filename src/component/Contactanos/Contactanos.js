import React from 'react'
import { Formulario } from './Formulario'
import image1 from '../../imagenes/chica.jpg';

export const Contactanos = () => {
    return (
        <div class="col-auto  p-5">
            <div class="d-flex justify-content-center">
                <div class="col">
                    <Formulario />
                </div>

                <div class="col" >
                    <img src={image1} class="w-75 p-3 float-end" />
                </div>
            </div>
        </div>



    )
}
