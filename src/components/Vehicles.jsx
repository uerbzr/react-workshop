import React, {useState} from 'react'
import Vehicle from './Vehicle'

function Vehicles({title, vehicles, setVehicles}) {
  
  const [formData, setFormData] = useState({ make: "", model: "" })
  
  const handleInputChange = (event) => {
    //console.log(event.target.id)
    //console.log(`[${event.target.id}] ${event.target.value}`)
    setFormData({...formData, [event.target.id]: event.target.value})    
    //console.log(formData)
  }
  const deleteVehicle = (id) => {
    let _vehicles = [...vehicles]
    _vehicles = _vehicles.filter((vehicle)=>vehicle.id !==id)
    setVehicles(_vehicles)
  }

  const addVehicle = (event) => {
      event.preventDefault()
      //spread the original vehicles and add the new one
      setVehicles([...vehicles, {id: Math.max(...vehicles.map(o => o.id+1)), make:formData.make, model:formData.model }])
  }
  
  return (
    <>

      <h1>{title ? title : 'Vehicles'}</h1>
      <div className='row'>
      {
        vehicles.map((v,i)=> (
          <Vehicle key={i} vehicle={v} deleteVehicle={deleteVehicle} />
          ))                                      
        }
     

        </div>
        <div className='row'>
        <div className='row'>      
        <form onSubmit={addVehicle} className='col-md-4'>
        <div className="card">
        <div className='class-body'>
        <input id="make" className="form-control" type="text" placeholder="make of vehicle" value={formData.make} onChange={handleInputChange}/>       
        <input id="model" className="form-control"  type="text" placeholder="model of vehicle" value={formData.model} onChange={handleInputChange}/>             
        </div>
        <div className='class-footer pull-right'>
        <button type="submit" className="btn btn-primary">Add</button>
        </div>
        </div>
        </form>
      </div>
      
        </div>

    </>
  )
}

export default Vehicles