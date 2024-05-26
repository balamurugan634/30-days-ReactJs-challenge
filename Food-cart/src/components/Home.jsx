import React, { useState } from 'react'
import './Home.css'
import Card from './Card'
import data from '../assets/products.json'

const Home = () => {
   const [products]=useState(data)
  return (
    <div className='home-main'>
        {products.map((product)=>(
                // const pname=product.name.length > 11?product.name.substring(0,10):product.name
            <Card key={product.id} product={product}/>

        ))}
    </div>
  )
}

export default Home
