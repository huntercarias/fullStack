
import React from 'react'
import images from '../../Export/imagenes';
import '../../stiles/slider.css';
import { motion } from 'framer-motion'

const Carrucel = () => {
    return (
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left: -821.336 }}>


                {images.map(image => (
                    <motion.div className='item'><img src={image} /></motion.div>
                ))}

            </motion.div>



        </motion.div>
    )
}

export default Carrucel


