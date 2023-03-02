import React, { useState, useEffect } from 'react'
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


const pika = () => {


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



            </div>
        </form>

    )
}

export default pika