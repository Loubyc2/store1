import React from 'react';

import "./Card.css"

function Card({ img, mark, title, discount, price, no_price, selt }) {
    return (
        <div className="card-content">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-text">
                <span className="card-mark">{mark}</span>
                <p className="card-title">{title}</p>
                <div className="card-details">
                    <span className="card-discount">{discount}</span>
                    <div className="card-price">
                        <span>{price}</span>
                        <span>{no_price}</span>
                    </div>
                </div>
                <span className="card-selt">{selt}</span>
            </div>
        </div>
    )
}

export default Card
