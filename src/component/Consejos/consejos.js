import { Container } from 'react-bootstrap';
import { Acordeon } from '../Acordeon/Acordeon';
import image1 from '../../imagenes/chica.jpg';


export const Consejos = () => {
    return (
        <Container>


            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div><Acordeon /></div>
                    </div>
                    <div class="col">
                        <div>
                            <img src={image1} class="card-img-top" />
                        </div>

                    </div>
                </div>
            </div>


        </Container>
    )
}
