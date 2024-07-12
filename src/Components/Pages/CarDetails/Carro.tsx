import React, { useEffect } from 'react'
import { useState } from 'react'
import { Cars } from '../Carros';
import "../../../CSS/Carro.css"

export const Carro = (props: {Cars: Cars}) => {

    useEffect(()=>{
        console.log(props.Cars)
    },[]);

    function reserveHan(id: string){
        if(props.Cars.vehicle_status == "Disponible"){
            fetch(`https://mywebsite.com/endpoint/${id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "vehicle_status": "En uso"
                }),
            });
        }
    }

    return (
        <div className='CarroBody'>
            <div className='InfGeneralTitulo'>Informacion general</div><br></br><br></br>
            <div className='InfGeneral'>
                <b>Fabricante:</b> {props.Cars.vehicle_make}<br></br><br></br>
                <b>Modelo:</b> {props.Cars.vehicle_model}<br></br><br></br>
                <b>Placa:</b> {props.Cars.vehicle_plac}<br></br><br></br>
                <b>Color:</b> {props.Cars.vehicle_color}<br></br><br></br>
                <b>Año:</b> {props.Cars.vehicle_year}<br></br> <br></br>
            </div>
            <img src='https://imgs.search.brave.com/hWnsSZSb41zkOlGu_tMmM0j2HyNMFgoMw3Mc1FDQuFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEx/MTkyMDA0L3Bob3Rv/L2Nhci12aWV3Lndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPUJ2T2lrT0pE/WHFKdl9BSm5JY1lB/cXpsczdRemF6UWpp/N01RX0J0NWo4Q2M9'></img>
            <div className="clearfix"></div>
            <br />  
            <div className='Detalles'> Detalles
                <ul className='ListaDetalles'>
                    <li><b>Millas:</b> {props.Cars.vehicle_mileage}</li>
                    <li><b>Fecha de registro:</b> {props.Cars.vehicle_registration_date}</li>
                    <li><b>Estado:</b> {props.Cars.vehicle_status}</li>
                </ul>
                <button className='ReservaButton'onClick = {() => reserveHan(props.Cars.id)}>{props.Cars.vehicle_status != "Disponible"? "No se puede reservar" : "Hacer reserva"}</button>
            </div>
        </div>
    )
}