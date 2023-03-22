import React from 'react'
import images from '../../Export/imagenes'
import '../stiles/stiles.css';
import { motion } from 'framer-motion'

const Sliderconfondo = () => {
  return (
    <motion.div className=' slider-container'>
      <motion.div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 slider' drag='x'
        dragConstraints={{ right: 0, left: -821.336 }}>


        {images.map(image => (
          <motion.div className='item'><img src={image} /></motion.div>
        ))}

      </motion.div>



    </motion.div>

  )
}

export default Sliderconfondo