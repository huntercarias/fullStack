import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from '../validador';

const baseURL = "https://estetica-bs.com/servidorApp/public/api/RegistraPersonaCorreo";

export const Formulario = () => {
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
        <form class="form-inline" onSubmit={handleSubmit(onSubmit)}   >
            <div class="form-group mx-sm-3 mb-2">
                <label class="sr-only"> Nombre</label>
                <input class="form-control" placeholder="Nombre Completo" type="text" {...register('nombre', {
                    required: true

                })} />
                {errors.nombre?.type === 'required' && <p> El campo nombre es requerido</p>}
            </div>

            <div class="form-group mx-sm-3 mb-2">
                <label class="sr-only"> Correo</label>
                <input class="form-control" placeholder="Ingrese Correo" type="text" {...register('correo', {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.correo?.type === 'pattern' && <p> correo formato invalido</p>}
                {errors.correo?.type === 'required' && <p> ingrese su correo</p>}
            </div>

            <div class="form-group mx-sm-3 mb-2">
                <label class="sr-only"> Telefono </label>
                <input class="form-control" placeholder="Ingrese Telefono" type="number" {...register('telefono', {
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

            <div class="form-group mx-sm-3 mb-2">
                <label class="sr-only"> Mensaje </label>
                <input class="form-control" placeholder="Ingrese Mensaje" type="text" {...register('mensaje', {
                    required: true

                })} />
                {errors.mensaje?.type === 'required' && <p> Mensaje obligatorio</p>}
            </div>
            <input class="btn btn-primary mb-2" type="submit" value="Enviar" />
        </form>
    )
}
