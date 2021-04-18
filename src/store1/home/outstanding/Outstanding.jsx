import React from 'react'
import "./Outstanding.css"

import data from "../../data"
import Card from '../../card/Card'

// images
import home_banner1 from "../../img/banner/banner-full-v2.webp";

function Outstanding() {
    return (
        <div className="outstanding">
            <div className="carousel slide" id="outstandin-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {data.carousel_img.map(item => (
                        item.active ? <div className="carousel-item active">
                            <img src={item.img} alt="carousel-img" />
                        </div> : <div className="carousel-item">
                            <img src={item.img} alt="carousel-img" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="outstanding-cards">
                {data.outstandingOne.map(item => (
                    <div className="outstanding-card">
                        <Card
                            img={item.img}
                            mark={item.mark}
                            title={item.title}
                            discount={item.discount}
                            price={item.price}
                            no_price={item.no_price}
                            selt={item.selt}
                        />
                    </div>
                ))}
            </div>
            <div className="home__banner">
                <img src={home_banner1} alt="" />
            </div>
            <div className="outstanding-cards">
                {data.outstandingTwo.map(item => (
                    <div className="outstanding-card">
                        <Card
                            img={item.img}
                            mark={item.mark}
                            title={item.title}
                            discount={item.discount}
                            price={item.price}
                            no_price={item.no_price}
                            selt={item.selt}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Outstanding;
