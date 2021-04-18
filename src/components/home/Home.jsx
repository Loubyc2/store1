import React from "react";
import "./Home.css"

import data from "../data/data"
import { Link } from "react-router-dom";
import Category from "./Category";
import Offert from "./Offert";

function Home() {
    return (
        <div className="home">
            {/* Cousel */}
            <div className="carousel slide" id="homeBanner" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    {data.imgs.map(item => (
                        <div className={item.active ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <Link to="/">
                                <img src={item.img} alt="carousel-img" />
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

            {/* Offert component */}

            <div className="home__offert">
                <Offert mapingData=
                    {data.offert.map(item => (
                        <div className={item.active ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <Link to="/">
                                <img src={item.img} alt="carousel-img" />
                                <div className={item.disponible ? "offert__details" : "offert__details hiden-span"}>
                                    <p className="offert__title">{item.title}</p>
                                    <span>{item.color && item.color}</span>
                                    <span className="offert__noPrice">{item.no_price && item.no_price}</span>
                                    <span className="offert__price">{item.price}</span>
                                </div>
                                <div className="offert__btn-wrapper">
                                    {item.disponible ? <button>comprar</button> : <button>No disponible</button>}
                                </div>
                            </Link>
                        </div>
                    ))} />
            </div>

            {/* Category component */}

            <div className="home__categories">
                <Category mapingData2=
                    {data.categories.map(item => (
                        <div className={item.active ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <Link to="/">
                                <img src={item.img} alt="carousel-img" />
                                <div className={item.disponible ? "offert__details" : "offert__details hiden-span"}>
                                    <p className="offert__title">{item.title}</p>
                                    <span>{item.color && item.color}</span>
                                    <span className="offert__noPrice">{item.no_price && item.no_price}</span>
                                    <span className="offert__price">{item.price}</span>
                                </div>
                                <div className="offert__btn-wrapper">
                                    {item.disponible ? <button>comprar</button> : <button>No disponible</button>}
                                </div>
                            </Link>
                        </div>
                    ))} />
            </div>
        </div>
    )
}

export default Home