import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
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
    </div>
  )
}

export default Menu