import React from 'react'
import { useState } from 'react'
import "../../CSS/Carros.css"
import{data} from "../../Data/Data"

export const Carros = () => {
    const [Search, setSearch] = useState<string>("");
    console.log(Search)
    return (
        <div className='CarrosBody'>
            <form className='FormUser'>
                <input placeholder='Ingrese su busqueda' className='InputUser' onChange={(e) => setSearch(e.target.value)}></input>
            </form>
            <table className='TablaCarros'>
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Fabricante</th>
                        <th>Modelo</th>
                        <th>Año</th>
                        <th>Estado</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((item) => {
                            return Search == "" ? item : item.vehicle_make.toLowerCase().includes(Search.toLowerCase()) || item.vehicle_model.toLowerCase().includes(Search.toLowerCase())
                        }).map((item)=>(
                            <tr key={item.id}>
                                <td>{item.vehicle_plac}</td>
                                <td>{item.vehicle_make}</td>
                                <td>{item.vehicle_model}</td>
                                <td>{item.vehicle_year}</td>
                                <td>{item.vehicle_status}</td>
                            </tr>
                        ))  
                    }
                </tbody>
            </table>
        </div>
    )
}   
