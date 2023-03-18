

//import Pika from './components/pika';
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from '../validador';


const baseURL = "https://estetica-bs.com/servidorApp/public/api/RegistraPersonaCorreo";

export const About = () => {
    const [post, setPost] = React.useState(null);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        //createPost(data.nombre, data.correo, data.telefono, data.mensaje);
        createPostPrueba(data);
    }

    function createPostPrueba(data) {
        axios
            .post(baseURL, data)
            .then((response) => {
                alert("Agregado Exitosamente");
                setPost(response.data);
            });
    }

    // puedes  pasar dato por dato//
    //  function createPost(nombre, correo, telefono, mensaje) {
    //  axios
    //      .post(baseURL, {
    //        nombre: nombre,
    //        correo: correo,
    //        telefono: telefono,
    //        mensaje: mensaje,
    //      })
    //      .then((response) => {
    //        alert(response.data);
    //        setPost(response.data);
    //     });
    //  }


    return (

        <div className="App">
            <header className="App-header">


                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label> Nombre</label>
                        <input type="text" {...register('nombre', {
                            required: true

                        })} />
                        {errors.nombre?.type === 'required' && <p> El campo nombre es requerido</p>}
                    </div>


                    <div>
                        <label> Correo</label>
                        <input type="text" {...register('correo', {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                        {errors.correo?.type === 'pattern' && <p> correo formato invalido</p>}
                        {errors.correo?.type === 'required' && <p> ingrese su correo</p>}
                    </div>

                    <div>
                        <label> Telefono </label>
                        <input type="text" {...register('telefono', {
                            required: true,
                            maxLength: 10,
                            validate: edadValidator,
                            pattern: /[0 - 9] */
                        })} />
                        {errors.telefono?.type === 'validate' && <p> formato invalido telefono en guatemala</p>}
                        {errors.telefono?.type === 'pattern' && <p> formato invalido telefono solo debe contener numeros</p>}
                        {errors.telefono?.type === 'maxLength' && <p> Longitud de telefono no debe ser mayo a 10</p>}
                        {errors.telefono?.type === 'required' && <p> telefono obligatorio</p>}
                    </div>

                    <div>
                        <label> Mensaje </label>
                        <input type="text" {...register('mensaje', {
                            required: true

                        })} />
                    </div>

                    <input type="submit" value="Enviar" />


                </form>



            </header>
        </div >

    );
}
