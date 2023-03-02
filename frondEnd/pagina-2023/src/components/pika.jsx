import React from 'react'
import axios from "axios";


const baseURL = "http://localhost/fullStack/backEnd/servidorApp/public/api/RegistraPersona";


const pika = () => {

    const [post, setPost] = React.useState({ nombre: null, apellido: null });

    function createPost() {
        axios
            .post("http://localhost/fullStack/backEnd/servidorApp/public/api/RegistraPersona", {
                nombre: "christofer joser",
                apellido: "carias peña",
                correo: "christofer@hotmail.com",
                dni: "202020201",
                fechaNacimiento: "1995-10-20",
                destino_id: "1",
                hotel_id: "1"
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    if (!post) return "No post!"

    return (
        <form>
            <div class="row g-3 align-items-center">
                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Nombres</label>
                    <input type="text" id="Nombres" class="form-control" placeholder="Disabled input">
                    </input>
                </div>

                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Apellidos</label>
                    <input type="text" id="Apellidos" class="form-control" placeholder="Disabled input">
                    </input>
                </div>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Telefono</label>
                    <input type="text" id="Apellidos" class="form-control" placeholder="Disabled input">
                    </input>
                </div>


                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Fecha Nacimiento</label>
                    <input type="text" id="Apellidos" class="form-control" placeholder="Disabled input">
                    </input>
                </div>


                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Mensaje</label>
                    <input type="text" id="Apellidos" class="form-control" placeholder="Disabled input">
                    </input>
                </div>

                <div>
                    <h1>{post.nombre}</h1>
                    <p>{post.apellido}</p>
                    <button onClick={createPost}>Create Post</button>
                </div>

            </div>
        </form>

    )
}

export default pika