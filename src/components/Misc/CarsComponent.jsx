import React, { useState } from 'react'

function CarsComponent() {
    const [activeCar, setActiveCar] = useState(-1)
    const cars = [
        {
            id:1,
            make:"Mini",
            model:"Clubman"
        },
        {
            id:2,
            make:"Mini",
            model:"One"
        },
        {
            id:3,
            make:"Smart",
            model:"ForTwo"
        }
    ]
  return (
    <>
        <h1>Cars Component</h1>
        <ul className='list-group'>
            {
                cars.map((car, index)=> 
                (
                    <li key={car.id} 
                        className={activeCar===index ? 'list-group-item active' : 'list-group-item'}
                        onClick={()=> {setActiveCar(index)}}>{car.make} {car.model}</li>
                ))
            }
        </ul>
    </>
  )
}

export default CarsComponent