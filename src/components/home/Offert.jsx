import React from 'react';
//import { Link } from 'react-router-dom';
//import data from '../data/data';


function Offert({ mapingData }) {
    return (
        <div className="offert">
            <p className="offer__title">Ofertas <span>motorola</span></p>
            <div className="offert__carousel">
                <div className="carousel slide" id="offertCarousel" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#offertCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    </div>
                    <div className="carousel-inner">
                        {/* mapingDAta from home component */}
                        {mapingData}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#offertCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#offertCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Offert;
