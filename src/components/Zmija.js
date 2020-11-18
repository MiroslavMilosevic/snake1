import React, { useEffect, useState } from 'react'
import { v1 as uuid } from 'uuid'
import {promeniKordinate,pomeriHranu } from '../funkcije'

export default function Zmija({ pravac,setPravac ,pozicija, setPozicija, zmijaNiz, setZmijaNiz, brojac, setBrojac, nizIznadApp }) {
    // const [brojac, setBrojac] = useState(1);

    const produziZmiju=(zmijaNiz, setZmijaNiz)=>{
        let tmp = [...zmijaNiz];
        let duzina=tmp.length;
        let objekat={bottom: tmp[duzina-1].bottom, left: tmp[duzina-1].left, klasa2:'teloZmije',
         roditeljBottom:tmp[duzina-1].bottom, roditeljLeft:tmp[duzina-1].left}
        tmp.push(objekat)
        setZmijaNiz(tmp);
    }


       useEffect(()=>{
    setInterval(() => {
        setZmijaNiz(nizIznadApp)
    }, 30);
       },[])

    useEffect(() => {
      //  produziZmiju(zmijaNiz, setZmijaNiz);
         
        let a = setInterval(() => {
           
         promeniKordinate(zmijaNiz,setZmijaNiz, pravac);
        
        }, 95)/////
        return () => {
            clearInterval(a);
        }

    }, [pravac])//useEffect

    useEffect(() => {
        if (((zmijaNiz[0].left>=pozicija.left&&zmijaNiz[0].left<=pozicija.left+30)&&
        (zmijaNiz[0].bottom>=pozicija.bottom&&zmijaNiz[0].bottom<=pozicija.bottom+30))||
        ((zmijaNiz[0].left+20>=pozicija.left&&zmijaNiz[0].left+20<=pozicija.left+30)&&
        (zmijaNiz[0].bottom+20>=pozicija.bottom&&zmijaNiz[0].bottom+20<=pozicija.bottom+30))) {
           //  console.log('udarilo je u zmiju');
           pomeriHranu(setPozicija, window.innerHeight, window.innerWidth);
  
            let tmp=[...nizIznadApp]
            let duzina=tmp.length;
            let objekat={bottom: tmp[duzina-1].bottom, left: tmp[duzina-1].left, klasa2:'teloZmije',
            roditeljBottom:tmp[duzina-1].bottom, roditeljLeft:tmp[duzina-1].left}
            nizIznadApp.push(objekat);
            console.log(nizIznadApp);
             produziZmiju(zmijaNiz, setZmijaNiz);
             setBrojac(brojac+1)

        } //if

        
     //   console.log('useeffect promeni zmijaniza');
     }, [zmijaNiz])


    return (
        <>
            {zmijaNiz.map(el => { return <div key={uuid()} className={`zmija ${el.klasa2}`} style={{ bottom: el.bottom, left: el.left }}></div> })}
        </>

    )
}
