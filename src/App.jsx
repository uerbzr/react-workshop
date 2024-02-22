
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  useState } from 'react'

import Vehicles from './components/Vehicles'



function App() {
  

    const [vehicles, setVehicles] = useState([
    {
        id:1,
        make:"KTM",
        model:"390 Adventure",
        likes:20
    },
    {
        id:2,
        make:"Yamaha",
        model:"XT660Z Tenere"
    },
    {
        id:3,
        make:"BMW",
        model:"F650"
    },
    {
        id:4,
        make:"Mini",
        model:"Clubman"
    },
    {
        id:5,
        make:"Mini",
        model:"One"
    },
    {
        id:6,
        make:"Smart",
        model:"ForTwo"
    }
])

  return (
    <>

      <Vehicles title={"Bikes/Cars"} vehicles={vehicles} setVehicles={setVehicles}/>
    </>
  )
}

export default App
