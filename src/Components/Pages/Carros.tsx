import React, { useEffect } from 'react'
import { useState } from 'react'
import "../../CSS/Carros.css"
import { Carro } from "./CarDetails/Carro.tsx"

export interface Cars {
    id:                        string;
    vehicle_plac:              string;
    vehicle_make:              string;
    vehicle_model:             string;
    vehicle_year:              number;
    vehicle_color:             string;
    vehicle_registration_date: string;
    vehicle_mileage:           number;
    vehicle_status:            VehicleStatus;
}

export enum VehicleStatus {
    Disponible = "Disponible",
    EnReparaciones = "En reparaciones",
    EnUso = "En uso",
}

export const Carros = () => {

    const [Search, setSearch] = useState<string>("");
    const [Data, setData] = useState<Cars[]>([]);
    const [CurrentCarro, setCurrentCarro] = useState<Cars>();

    useEffect(()=>{
        fetch("http://localhost:3333/Cars").then(res => res.json()).then(json => setData(json))
    },[]);

    
    return (
        <div className='CarrosBody'>
            {CurrentCarro ? <Carro Cars = {CurrentCarro}></Carro> : null }
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
                        Data.filter((item) => {
                            return Search == "" ? item : item.vehicle_make.toLowerCase().includes(Search.toLowerCase()) || item.vehicle_model.toLowerCase().includes(Search.toLowerCase())
                        }).map((item)=>(
                            <tr key={item.id} onClick={() => setCurrentCarro(item)}>
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
