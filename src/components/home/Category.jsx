import React from 'react'
//import { Link } from 'react-router-dom'
//import data from '../data/data'

function Category({ mapingData2 }) {
    return (
        <div className="category">
            <p className="category__title"><span>El</span> smartphone ideal <span>para ti</span></p>

            <ul className="nav nav-tabs category__tab-title" id="categoryTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="topVentas-tab"
                        data-bs-toggle="tab" data-bs-target="#topVentas"
                        type="button" role="tab" aria-controls="home"
                        aria-selected="true"
                    >
                        top ventas
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="novedades-tab"
                        data-bs-toggle="tab" data-bs-target="#novedades"
                        type="button" role="tab" aria-controls="profile"
                        aria-selected="false"
                    >
                        novedades
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="motoG-tab"
                        data-bs-toggle="tab" data-bs-target="#motoG"
                        type="button" role="tab" aria-controls="contact"
                        aria-selected="false"
                    >
                        mogo g
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="motoE-tab"
                        data-bs-toggle="tab" data-bs-target="#motoE"
                        type="button" role="tab" aria-controls="contact"
                        aria-selected="false"
                    >
                        moto e
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="premium-tab"
                        data-bs-toggle="tab" data-bs-target="#premium"
                        type="button" role="tab" aria-controls="contact"
                        aria-selected="false"
                    >
                        premium
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="topVentas" role="tabpanel" aria-labelledby="topVentas-tab">
                    <div className="offert__carousel">
                        <div className="carousel slide" id="categoryCarousel" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#categoryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#categoryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#categoryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#categoryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner p-5 category-props">
                                {/* mapingDAta from home component */}
                                {mapingData2}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="novedades" role="tabpanel" aria-labelledby="novedades-tab">
                    <div className="offert__carousel">
                        <div className="carousel slide" id="novedadesCarousel" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#novedadesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#novedadesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#novedadesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#novedadesCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner p-5 category-props">
                                {/* mapingDAta from home component */}
                                {mapingData2}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#novedadesCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#novedadesCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="motoG" role="tabpanel" aria-labelledby="motoG-tab">
                    <div className="offert__carousel">
                        <div className="carousel slide" id="motoGCarousel" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#motoGCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#motoGCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#motoGCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#motoGCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner p-5 category-props">
                                {/* mapingDAta from home component */}
                                {mapingData2}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#motoGCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#motoGCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="motoE" role="tabpanel" aria-labelledby="motoE-tab">
                    <div className="offert__carousel">
                        <div className="carousel slide" id="motoECarousel" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#motoECarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#motoECarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#motoECarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#motoECarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner p-5 category-props">
                                {/* mapingDAta from home component */}
                                {mapingData2}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#motoECarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#motoECarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="premium" role="tabpanel" aria-labelledby="premium-tab">
                    <div className="offert__carousel">
                        <div className="carousel slide" id="premiumCarousel" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#premiumCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#premiumCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#premiumCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#premiumCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner p-5 category-props">
                                {/* mapingDAta from home component */}
                                {mapingData2}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#premiumCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#premiumCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
