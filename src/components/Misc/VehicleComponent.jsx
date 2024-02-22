import React, {useState} from 'react'

function VehicleComponent(props) {
    const [activeVehicle, setActiveVehicle] = useState(-1)

  return (
    <>
         <h1>{props.title ? props.title : 'Vehicle'} Component</h1>
         <p>An example of a Vehicle component with props.  The title and array of vehicles is passed in</p>
        <ul className='list-group'>
            {
                props.vehicles.map((v, index)=> 
                (
                    <li key={v.id} 
                        className={activeVehicle===index ? 'list-group-item active' : 'list-group-item'}
                        onClick={()=> {setActiveVehicle(index)}}>{v.make} {v.model}</li>
                ))
            }
        </ul>
    </>
  )
}

export default VehicleComponent