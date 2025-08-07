const SpotMap = () => {
    return (
        <section className="map">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15663.29498296886!2d-0.398801!3d51.619065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa9e1968ec6474ad%3A0xd73728c553ce43e0!2sMakeup%20By%20Leena!5e1!3m2!1sen!2sin!4v1753252377184!5m2!1sen!2sin"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpotMap;