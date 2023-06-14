import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextAPI } from './EcommerceAPI';

function Single() {
    const {AddtoCart, Count} = useContext(ContextAPI)
    const { id } = useParams()
    const [Single, setSingle] = useState([])
    useEffect(() => {
        async function vikashjldiho() {
            const result = await axios.get('https://fakestoreapi.com/products/' + id);
            console.log(result.data)
            setSingle(result.data)
        }
        vikashjldiho()
    }, [])


    return (
        <div className='detail'>
            <div className='image'>
                <img src={Single.image}></img>
            </div>
            <div className='texts'>

                <h1>${Single.price}</h1>
                <h2>{Single.title}</h2>
                <p>{Single.description}</p>

                {
                    (Count.find(item=>item.id===Single.id)!==undefined)
                        ? <p>added to cart</p>
                        : <a href='' onClick={(e) => AddtoCart(e,{
                            id: Single.id,
                            image: Single.image,
                            title:Single.title,
                            price: Single.price,
                        })}>Add to Cart</a>
                }

               
            </div>
        </div>
    )
}

export default Single