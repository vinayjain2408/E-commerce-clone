import React, { useContext } from 'react'
import { useState } from 'react'
import { ContextAPI } from './EcommerceAPI'

function Cart() {
  const { Count, setCount } = useContext(ContextAPI)
  // const [total,setTotal]=useState(0)
  

  function Removelist(e, ind) {
    e.preventDefault()
    setCount(
      Count.filter((text, id) => {
        return (
          ind !== id
        )
      })
    )
  }
  return (
    <div className='display'>
      <h1>Cart</h1>
      {Count.map((item, index) => {
      return (
          <div className='cartbox' key={index}>
            <div className='cartimg'>
              <img src={item.image}></img>
            </div>
            <div className='cartdetail'>
              <h3>{item.title}</h3>
              <h3>${item.price}</h3>
              <a href='' onClick={(e) => Removelist(e, index)}>Remove</a>
            </div>
          </div>
          )
      })

      }
      <div>
        { 
          Count.reduce((Total, nxtItem) => {
            console.log(Total)
            let sum=Math.round(Total.price + nxtItem.price)
           return(
             (
              <h1>SubTotal:${(sum)}</h1>
            ))
          })
        }
      </div>
    </div>
  )
}

export default Cart