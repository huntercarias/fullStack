
const imagenes = ({ images }) => {
    return (
        <section className='slider'>
            <h1 className='slider__title'>Estetica Belle Siluet</h1>
            {images.map((image) => (
                <div key={image.id} className='slider__content--item'>
                    <img src={image.image} alt={image.title} />
                    <p className='slider-description'>{image.title}</p>
                </div>
            ))}
        </section>
    )
}

export default imagenes