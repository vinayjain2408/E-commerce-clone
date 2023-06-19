import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { ContextAPI } from './EcommerceAPI';
import { Link } from 'react-router-dom';

function Product() {

    const { Count, AddtoCart } = useContext(ContextAPI)
    const [cart, setCart] = useState([])


    useEffect(() => {
        async function fetchdata() {
            const result = await axios.get('https://fakestoreapi.com/products');
            console.log(result.data)
            setCart(result.data)
        }
        fetchdata()
    }, [])




    return (
        <div className='product'>
            {
                cart.map((Cartname) => {
                    return (
                        <div className='products' key={Cartname.id}>
                            <Link to={`/products/${Cartname.id}`}> <img className='ProductImage' src={Cartname.image}></img></Link>
                            <Link to={`/products/${Cartname.id}`}><p>{Cartname.title}</p></Link>
                             
                            <h2>${Cartname.price}</h2>

                            {
                                (Count.find(item=>item.id===Cartname.id)!==undefined)
                                    ? <p>added to cart</p>
                                    : <a className='add' href='' onClick={(e) => AddtoCart(e, {
                                        id: Cartname.id,
                                        image: Cartname.image,
                                        title:Cartname.title,
                                        price: Cartname.price,
                                    })}>Add to Cart</a>
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product