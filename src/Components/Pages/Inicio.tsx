import React from 'react'
import { useState } from 'react'
import "../../CSS/Inicio.css"

export const Inicio = () => {
    return (
        <div className='InicioBody'>
            <div className='Frame'>
                <div className='IntroTitle'>Introduccion</div>
                <div className='Intro'>Somos una compañia ubicada en XXYYYY especializada en la renta de vehiculos para uso personal, con garantias tanto de seguridad como de calidad y precios imcomparables</div>
                <img className='ImageLocation' src="https://cdn.ttgtmedia.com/rms/onlineimages/screenshot_1_google_maps_on_desktop_f_mobile.jpg" alt="Ubicacion" />
                <div>Puede econtrarnos en: YYJPK Cra.150 </div>
                <img className='ImageLocation' src="https://imgs.search.brave.com/DUL5OkMu0ZHEx7zDZTD2i0t8q-VbYsHAsGNoGqKv0sI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaW5l/bWF2ZWhpY2xlcy5j/b20vaW1hZ2VzL0Yx/NDI1NjYwMzcuanBn" alt="Ubicacion" />
            </div>
        </div>
    )
}   