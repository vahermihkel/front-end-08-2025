import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import Esindused from './pages/Esindused'
import Kalkulaator from './pages/Kalkulaator'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Link to="/">
        <img className="pilt" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWnTTGFoCTPV4Qk7zUIDMeEIZa6ejPo8_Wg&s" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Toodet lisama</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/kalkulaator" element={ <Kalkulaator /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
