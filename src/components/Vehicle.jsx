import React from 'react'

function Vehicle({vehicle, deleteVehicle }) {
  return (
   <>   
        <div className="card col-md-4">
          {vehicle.id}
        <div className="card-body">
        <h5 className="card-title">{vehicle.make} {vehicle.model}</h5>    
        <p className="card-text">{vehicle.description ? vehicle.description : null }</p>

        </div>
        <div className='card-footer'>
        <button onClick={() => deleteVehicle(vehicle.id)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
        </div>
   </>
  )
}

export default Vehicle