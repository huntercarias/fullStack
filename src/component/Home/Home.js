import '../../App.css'

import image1 from '../../imagenes/first.jpg';
import image3 from '../../imagenes/third.jpg';
import image4 from '../../imagenes/masaje-pareja.jpg';
import image5 from '../../imagenes/tratamiento abdomen.jpg';
import image6 from '../../imagenes/MasajeRelajante.jpg';


// components
import Slider from '../Carousel/Carousel'
import { Container } from 'react-bootstrap';

export const Home = () => {

    const images = [
        {
            id: '1',
            title: 'Faciales',
            image: image1,
        },
        {
            id: '2',
            title: 'Tratamientos Capilares',
            image: image3,
        },
        {
            id: '3',
            title: 'Relajación en Pareja',
            image: image4,
        },
        {
            id: '4',
            title: 'Tratamiento de Radiofrecuencia',
            image: image5,
        },
        {
            id: '5',
            title: 'Relajación',
            image: image6,
        },
    ]

    return (
        <div >
            <Container>
                <div className='App'>
                    <Slider images={images} />
                </div>
            </Container>
        </div >
    )
}
