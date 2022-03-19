import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'

const Listings = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get('../data.json')
            console.log(res.data.products)
            setProducts(res.data.products)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{ margin: "30px" }}>
            <div>OLAY / 暢銷產品 </div>
            <div className='' style={{ marginTop: "30px" }}>共 {products.length} 款產品</div>
            <div className='custom-listing-container'>
                {products.map((product, i) => {
                    return (
                        <Product product={product} key={i} />
                    )
                })}
            </div>

        </div>

    )
}

export default Listings