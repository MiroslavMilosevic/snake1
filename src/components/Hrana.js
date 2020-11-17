import React, { useEffect, useState } from 'react'
import {pomeriHranu } from '../funkcije'

export default function Hrana({pozicija, setPozicija}) {
   // const [pozicija, setPozicija] = useState({ left: 250, bottom: 300 });
  // console.log('HRANAAAAAAAAAAAAAAAAAA');
    useEffect(() => {

        // setInterval(() => {
   
           
        // }, 11320);
    }, [])


    return (
        <div className='hrana' style={{ bottom: pozicija.bottom, left: pozicija.left }}>


        </div>
    )
}
