import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/WebHero-Live-Now_1x_-_Copy._CB665824170_.jpg" />
       
            <div className="home__row">
                <Product
                    id="123212321"
                    title="The lean startup: How constant Innovation creates value"
                    price={11.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/cc_1x_bp._SY304_CB665820827_.jpg"
                />
                <Product
                    id="123212321"
                    title="The lean startup: How constant Innovation creates value"
                    price={11.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSaheli/events/sbd21/home-sheets-pc._SY116_CB665551920_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123212321"
                    title="The lean startup: How constant Innovation creates value"
                    price={11.96}
                    rating={5}
                    image="https://lh3.googleusercontent.com/proxy/i7xde02GXKta-SS2kGvPpVFopnVu5af2FJgc_qpO7f3GKmayettnDlRtVymkxRkQJUoKQ20ONS89NaQPrvqfAQnySsWu-tUgZbg95pbVdGf4F0FzaXhjUjLV4XHtHSI"
                />
                <Product
                    id="123212321"
                    title="The lean startup: How constant Innovation creates value"
                    price={11.96}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617865122000"
                />
                <Product
                    id="123212321"
                    title="The lean startup: How constant Innovation creates value"
                    price={11.96}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-se-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1599936776000"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123212321"
                    title="The lean startup: How constant Innovation creates value"
                    price={11.96}
                    rating={5}
                    image="https://image.coolblue.nl/840x473/content/cd926eedb766094b2d7a376a1f8626cb"
                />
                
            </div>
        </div>
    )
}

export default Home
