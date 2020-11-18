import './App.css';
import Zmija from './components/Zmija'
import Hrana from './components/Hrana'
import { useEffect, useState } from 'react';
import { resizeScreen } from './funkcije'

import { Router as Router, Switch, Route, Link } from 'react-router-dom'
import { HashRouter, } from "react-router-dom";

let nizIznadApp = [
  { bottom: 260, left: 140, klasa2: 'glavaZmije', roditeljBottom: undefined, roditeljLeft: undefined },
  { bottom: 260, left: 120, klasa2: 'teloZmije', roditeljBottom: 260, roditeljLeft: 140 },
  { bottom: 260, left: 100, klasa2: 'teloZmije', roditeljBottom: 260, roditeljLeft: 120 },
]

function App() {

  const [pravac, setPravac] = useState('');
  const [pozicija, setPozicija] = useState({ left: 250, bottom: 300 });
  const [brojac, setBrojac] = useState(0);
  const [zmijaNiz, setZmijaNiz] = useState(nizIznadApp);

  // useEffect(() => {
  //   console.log(zmijaNiz.length, 'duzina');
  // }, [zmijaNiz.length])

  const promeniPravacLevo = () => {

    setPravac('levo')
    //console.log(pravac);
  }
  const promeniPravacDesno = () => {

    setPravac('desno')
    //  console.log(pravac);
  }
  const promeniPravacGore = () => {

    setPravac('gore')
    // console.log(pravac);
  }
  const promeniPravacDole = () => {

    setPravac('dole')
    //console.log(pravac);
  }

  useEffect(() => {

    let div1 = document.getElementById('div1');
    let menuWraper = document.getElementById('menuWraper');
    resizeScreen(div1, menuWraper, window.innerHeight)

    window.addEventListener('resize', function () {
      resizeScreen(div1, menuWraper, window.innerHeight)
    })

  }, [])


  return (
    <div className="App">

      <HashRouter>
        <Switch>
          <Route exact path={["/game", '/']}>
            <div className='divKlasa' id='div1'>
              <div className='menuWraper' id='menuWraper'>
                <Link to='home'>  <button className='menuButton'>home</button></Link>
                <Link to='home'>  <button className='menuButton'>restart</button></Link>
                <span>Rezultat: {brojac}</span>
              </div>

              {/* ovo je prostor za react komponentu */}
              <Zmija pravac={pravac} setPravac={setPravac} nizIznadApp={nizIznadApp}
                pozicija={pozicija} setPozicija={setPozicija} zmijaNiz={zmijaNiz} setZmijaNiz={setZmijaNiz} brojac={brojac} setBrojac={setBrojac} />
              <Hrana pozicija={pozicija} setPozicija={setPozicija} />

              {/* ovo je prostor za react komponentu */}





              <footer className='footerWraper'>
                <div className='divGornji'>
                  <button onClick={() => { promeniPravacGore() }} className='footerButton'>^</button>
                </div>
                <div className='divDonji'>
                  <button onClick={() => { promeniPravacLevo() }} className='footerButton'> &lt; </button>
                  <button onClick={() => { promeniPravacDole() }} className='footerButton'>|</button>
                  <button onClick={() => { promeniPravacDesno() }} className='footerButton'> &gt; </button>
                </div>

              </footer>
            </div>
          </Route>
          <Route exact path="/home">
            <h2>Home page je u izradi</h2>

            <Link to='game'>   <button onClick={() => {
              setZmijaNiz([
                { bottom: 260, left: 140, klasa2: 'glavaZmije', roditeljBottom: undefined, roditeljLeft: undefined },
                { bottom: 260, left: 120, klasa2: 'teloZmije', roditeljBottom: 260, roditeljLeft: 140 },
                { bottom: 260, left: 100, klasa2: 'teloZmije', roditeljBottom: 260, roditeljLeft: 120 },
              ])
              setPravac('')
            }} className='menuButton'>Pocni Igricu</button> </Link>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
