import React, { useEffect } from 'react'

const Product = ({ product }) => {

    const renderStars = () => {
        let stars = []

        for (let i = 0; i < 5; i++) {
            if (i < product.stars) {
                stars.push(<img className="custom-star" src={require('../images/filled-star.png')} />)
            } else {
                stars.push(<img className="custom-star" src={require('../images/empty-star.png')} />)
            }
        }

        return stars
    }

    console.log(product)

    return (
        <div className="custom-product-container">
            <img className='custom-heart-btn' src={require('../images/heart.png')} alt="" />

            <img className='custom-product-image' src={product.image} />
            <div className='custom-product-title'> {product.title}</div>
            <div className='custom-product-description'>{product.description}</div>
            <div className='custom-price-font'> ${product.price}</div>
            <div>{renderStars()}</div>
            <div className='custom-button-group'>
                <button className='custom-add-to-cart-btn'>加入購物車</button>
                <a className='custom-view-detail-btn'>查看詳情</a>
            </div>

        </div>
    )
}

export default Product