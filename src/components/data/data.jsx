//banner
import banner_1 from "../../img/banner/banner-1.webp";
import banner_2 from "../../img/banner/banner-2.png";
import banner_3 from "../../img/banner/banner-3.png";
import banner_4 from "../../img/banner/banner-4.png";
//offer
import offert_1 from "../../img/offert/offert_1.png";
import offert_2 from "../../img/offert/offert_2.png";
import offert_3 from "../../img/offert/offert_3.png";
import offert_4 from "../../img/offert/offert_4.png";
import offert_5 from "../../img/offert/offert_5.png";
import offert_6 from "../../img/offert/offert_6.png";
import offert_7 from "../../img/offert/offert_7.png";
import offert_8 from "../../img/offert/offert_8.png";
const data = {
    imgs: [
        { img: banner_1, id: "1", active: "active" },
        { img: banner_2, id: "2" },
        { img: banner_3, id: "3" },
        { img: banner_4, id: "4" },
    ],
    // Offert
    offert: [
        {
            img: offert_1, id: "1",
            title: "moto g30",
            color: "más colores",
            price: "229.990",
            no_price: "$129.990",
            active: "active",
            disponible: true
        },
        {
            img: offert_2, id: "2",
            title: "moto e7",
            color: "más colores",
            price: "119.990",
            no_price: "$129.990",
            disponible: true
        },
        {
            img: offert_3, id: "3",
            title: "moto g9 power",
            color: "más colores",
            price: "189.990",
            no_price: "$229.990",
            disponible: true
        },
        {
            img: offert_4, id: "4",
            title: "moto e6i",
            color: "más colores",
            price: "79.990",
            no_price: "$129.990",
            disponible: true
        },
        {
            img: offert_5, id: "5",
            title: "moto e6 s",
            color: "más colores",
            price: "79.990",
            no_price: "$109.990",
            disponible: true
        },
        {
            img: offert_6, id: "6",
            title: "motorala razr",
            color: "más colores",
            price: "229.990",
            no_price: "$129.990",
            disponible: false
        },
        {
            img: offert_7, id: "7",
            title: "moto g9 plus",
            color: "más colores",
            price: "229.990",
            no_price: "$129.990",
            disponible: true
        },
        {
            img: offert_8, id: "8",
            title: "moto g100",
            color: "más colores",
            price: "148.990",
            no_price: "$189.990",
            disponible: false
        },
    ],

    // Categories
    categories: [
        {
            img: offert_1, id: "1",
            title: "motorola one fusion",
            color: "más colores",
            price: "149.990",
            no_price: "$199.990",
            active: "active",
            disponible: true
        },
        {
            img: offert_2, id: "2",
            title: "moto e6 s",
            color: "más colores",
            price: "79.990",
            no_price: "$109.990",
            disponible: true
        },
        {
            img: offert_3, id: "3",
            title: "moto g9 power",
            color: "más colores",
            price: "189.990",
            no_price: "$229.990",
            disponible: true
        },
        {
            img: offert_4, id: "4",
            title: "moto e6i",
            color: "más colores",
            price: "79.990",
            no_price: "$129.990",
            disponible: true
        },

    ]
}

export default data;