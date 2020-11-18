import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from './assets/banner.jpg';


function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <div className="home__main-text">
                    <h1>Sell. Earn. Upgrade</h1>
                    <p>Make extra cash to get the latest tech.</p>
                    <button>Start selling <svg id="icon-arrow-right-bold" viewBox="1.2 2.1 22 21" width="100%" height="100%"><path d="M11.704 22.098a1.48 1.48 0 01-1.02-.386 1.38 1.38 0 01-.413-.996c0-.375.146-.721.415-.978.411-.397 5.078-4.857 6.494-6.21H2.706c-1.035 0-1.506-.726-1.506-1.4 0-.679.471-1.406 1.506-1.406h14.472c-1.42-1.353-6.02-5.736-6.497-6.213-.292-.291-.445-.635-.442-.996a1.37 1.37 0 01.447-.975c.501-.479 1.354-.681 2.037.003.561.56 9.765 9.334 9.856 9.423l.173.163-.172.162c-.093.09-9.407 8.985-9.86 9.422-.264.258-.639.387-1.016.387"></path></svg></button>
                </div>
                <img src={banner} alt=""/>
            </div>
            <div className="home__row">
                <Product
                    id="1234"
                    title="Lisianthus Women Belt Buckle Wool Wide Brim Fedora Hat"
                    price={15.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/YjIyNTJmZmYt/YjIyNTJmZmYt-Zjg5ODM3NGIt-w758._SY608_CB417315422_.jpg"
                />
                <Product
                    id="1234"
                    title="Lisianthus Women Belt Buckle Wool Wide Brim Fedora Hat"
                    price={15.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/YjIyNTJmZmYt/YjIyNTJmZmYt-Zjg5ODM3NGIt-w758._SY608_CB417315422_.jpg"
                />
                <Product
                    id="1234"
                    title="Lisianthus Women Belt Buckle Wool Wide Brim Fedora Hat"
                    price={15.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/YjIyNTJmZmYt/YjIyNTJmZmYt-Zjg5ODM3NGIt-w758._SY608_CB417315422_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1234"
                    title="Lisianthus Women Belt Buckle Wool Wide Brim Fedora Hat"
                    price={15.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/YjIyNTJmZmYt/YjIyNTJmZmYt-Zjg5ODM3NGIt-w758._SY608_CB417315422_.jpg"
                />
                <Product
                    id="1234"
                    title="Lisianthus Women Belt Buckle Wool Wide Brim Fedora Hat"
                    price={15.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/YjIyNTJmZmYt/YjIyNTJmZmYt-Zjg5ODM3NGIt-w758._SY608_CB417315422_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234"
                    title="Lisianthus Women Belt Buckle Wool Wide Brim Fedora Hat"
                    price={15.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/YjIyNTJmZmYt/YjIyNTJmZmYt-Zjg5ODM3NGIt-w758._SY608_CB417315422_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;