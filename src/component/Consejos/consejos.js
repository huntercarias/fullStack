import { Container } from 'react-bootstrap';
import { Acordeon } from '../Acordeon/Acordeon';
import image1 from '../../imagenes/chica.jpg';


export const Consejos = () => {
    return (
        <Container>


            <div class="row text-center">
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-12"> </div>
                <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                    <div><Acordeon /></div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                    <img src={image1} class="w-100 p-6 float-end" />


                </div>

            </div>


        </Container>
    )
}
