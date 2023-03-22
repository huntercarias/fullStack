import React from 'react'
import { Formulario } from './Formulario'
import image1 from '../../imagenes/chica.jpg';

export const Contactanos = () => {
    return (
        <div class="row col-auto  p-5 ">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <Formulario />
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                <img src={image1} class="w-100 p-3 float-end" />
            </div>
        </div>



    )
}
