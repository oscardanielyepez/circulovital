import React from 'react';

const AboutPage = () => {
    return (
        <div style={{ paddingTop: '100px' }}> {/* Añadimos un padding superior para que el contenido no quede oculto por el menú fijo */}

            {/* Encabezado de la página */}
            <header className="hero-gradient text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Sobre Círculo Vital</h1>
                    <p className="lead">Comprometidos con el bienestar y la dignidad de nuestros adultos mayores.</p>
                </div>
            </header>

            <div className="container section-spacing">
                {/* Sección de Nuestra Historia */}
                <section className="mb-5 pb-5">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="fw-bold text-dark-custom mb-3">Nuestra Historia</h2>
                            <p className="text-muted">
                                Círculo Vital nació en Medellín con la misión de transformar el cuidado de los adultos mayores. Fundada por profesionales de la salud con años de experiencia, nuestra empresa se basa en la creencia de que la vejez debe ser una etapa de la vida vivida con alegría, respeto y compañía. Cada servicio que ofrecemos está impregnado de empatía y un profundo compromiso con la calidad de vida.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sección de Misión y Visión */}
                <section className="mb-5 pb-5 bg-pale-blue py-5 rounded-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center border-end-md">
                                <h3 className="text-primary-custom mb-3">Nuestra Misión</h3>
                                <p className="px-4 text-muted">Mejorar la calidad de vida de los adultos mayores a través de servicios personalizados de cuidado y acompañamiento, fomentando su independencia y bienestar emocional.</p>
                            </div>
                            <div className="col-md-6 text-center mt-4 mt-md-0">
                                <h3 className="text-primary-custom mb-3">Nuestra Visión</h3>
                                <p className="px-4 text-muted">Ser la empresa líder y de mayor confianza en cuidado integral para adultos mayores en el área metropolitana de Medellín, reconocidos por nuestro profesionalismo y calidez humana.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Nuestro Equipo */}
                <section>
                    <div className="row text-center">
                        <div className="col-lg-12 mb-5">
                            <h2 className="fw-bold text-dark-custom">Nuestro Equipo</h2>
                            <p className="text-muted">Profesionales apasionados por el cuidado y el servicio.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 border-0 text-center">
                                <div className="bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
                                    <i className="fas fa-user fa-3x text-muted"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nombre Miembro 1</h5>
                                    <p className="card-text text-primary-custom">Fundador / Director General</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 border-0 text-center">
                                <div className="bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
                                    <i className="fas fa-user-md fa-3x text-muted"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nombre Miembro 2</h5>
                                    <p className="card-text text-primary-custom">Jefe de Enfermería</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 border-0 text-center">
                                <div className="bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
                                    <i className="fas fa-hand-holding-heart fa-3x text-muted"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nombre Miembro 3</h5>
                                    <p className="card-text text-primary-custom">Coordinadora de Actividades</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;