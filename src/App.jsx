
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
        likes:20,
        img: "ktm_390_adventure.jpg"
    },
    {
        id:2,
        make:"Yamaha",
        model:"XT660Z Tenere",
        likes:10,
        img: "xt_660z_tenere.jpg"
    },
    {
        id:3,
        make:"BMW",
        model:"F650",
        likes:0,
        img: "bmw_f650.jpg"
    },    
    {
        id:4,
        make:"Mini",
        model:"Clubman",
        likes:100,
        img: "mini_clubman.jpg"
    },
    {
        id:5,
        make:"Mini",
        model:"One",
        img: "mini_one.jpg",
        likes:22
    },
    {
        id:6,
        make:"Smart",
        model:"ForTwo",
        likes:12,
        img: "smart_for2.jpg"
    },
    {
        id:7,
        make: "Boeing",
        model: "747",
        likes:120,
        img: "boeing_747.jpg"
    }
])

  return (
    <>

      {/* 
        here we are sending in some props to the Vehicles Component
        title - this prop is state that never changes
        vehicles - this prop is state that is passed into the compoent as it might change inside the component (delete/add)
        setVehicles - 
       */}
      <Vehicles title={"Vehicle Voting"} vehicles={vehicles} setVehicles={setVehicles}/>
    </>
  )
}

export default App
