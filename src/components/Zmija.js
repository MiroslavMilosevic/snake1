import React, { useEffect, useState } from 'react'
import { v1 as uuid } from 'uuid'
import {promeniKordinate,pomeriHranu } from '../funkcije'

export default function Zmija({ pravac,setPravac ,pozicija, setPozicija, zmijaNiz, setZmijaNiz }) {


    const produziZmiju=(zmijaNiz, setZmijaNiz)=>{
        let tmp = [...zmijaNiz];
        console.log('produzi zmijuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', zmijaNiz.length);
        let duzina=tmp.length;
        let objekat={bottom: tmp[duzina-1].bottom, left: tmp[duzina-1].left, klasa2:'teloZmije',
         roditeljBottom:tmp[duzina-1].bottom, roditeljLeft:tmp[duzina-1].left}
        tmp.push(objekat)
        setZmijaNiz(tmp);
    }

    //  useEffect(()=>{
    //     let tmp=[...pomocnaZmija];
    //     setZmijaNiz(tmp)
    //     console.log(pomocnaZmija);
    //     console.log('gore je pomocna');
    //     console.log(zmijaNiz);
   
    //  },[pomocnaZmija])

    useEffect(() => {
        produziZmiju(zmijaNiz, setZmijaNiz);
         
        let a = setInterval(() => {
            
         promeniKordinate(zmijaNiz,setZmijaNiz, pravac);
        
        }, 115)/////
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
  
        if (((zmijaNiz[0].left>=pozicija.left&&zmijaNiz[0].left<=pozicija.left+30)&&
        (zmijaNiz[0].bottom>=pozicija.bottom&&zmijaNiz[0].bottom<=pozicija.bottom+30))||
        ((zmijaNiz[0].left+20>=pozicija.left&&zmijaNiz[0].left+20<=pozicija.left+30)&&
        (zmijaNiz[0].bottom+20>=pozicija.bottom&&zmijaNiz[0].bottom+20<=pozicija.bottom+30))) {
            let tmpPravac=pravac;
            setPravac('');
            setTimeout(() => {
                setPravac(tmpPravac)
            }, 3);
           // produziZmiju(zmijaNiz, setZmijaNiz);
        } //if

        }
     //   console.log('useeffect promeni zmijaniza');
     }, [zmijaNiz])


    return (
        <>
            {zmijaNiz.map(el => { return <div key={uuid()} className={`zmija ${el.klasa2}`} style={{ bottom: el.bottom, left: el.left }}></div> })}
        </>

    )
}
