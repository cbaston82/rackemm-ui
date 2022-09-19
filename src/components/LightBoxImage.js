function LightBoxImage({ image }) {
    return (
        <a href={image} data-lightbox="photos">
            <img className="img-fluid" src={image} alt="rackemm uploaded" />
        </a>
    )
}

export default LightBoxImage
