import { useRef, useState } from "react"

function LaenuKalkulaator() {
  const [intressKokku, setIntressKokku] = useState(1.7+2.15);
  const [kuumakse, setKuumakse] = useState(348.73);
  const [laenusumma, setLaenusumma] = useState(75000);
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const ostuhindRef = useRef();
  const sisseMakseRef = useRef();
  const perioodRef = useRef();

  function arvutaKuumakse() {
    setLaenusumma(ostuhindRef.current.value - sisseMakseRef.current.value);

    setKuumakse((ostuhindRef.current.value - sisseMakseRef.current.value) / perioodRef.current.value / 12 * intressKokku / 2.3);
  }

  function arvutaIntress() {
    setIntressKokku(Number(marginaalRef.current.value) + Number(euriborRef.current.value));

    arvutaKuumakse();
  }

  return (
    <div>
      <label>Kinnisvara ostuhind</label>
      <input onChange={arvutaKuumakse} ref={ostuhindRef} defaultValue={75000} type="text" /><br />
      <label>Sissemakse</label>
      <input onChange={arvutaKuumakse} ref={sisseMakseRef} type="text" /><br />
      <label>Laenusumma</label>
      <input disabled value={laenusumma.toFixed(2)} type="text" /><br />
      <label>Periood</label>
      <select onChange={arvutaKuumakse} ref={perioodRef} defaultValue={30}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select>
      <label>Marginaal</label>
      <input onChange={arvutaIntress} ref={marginaalRef} defaultValue={1.7} type="text" /><br />
      <label>Euribor</label>
      <input onChange={arvutaIntress} ref={euriborRef} defaultValue={2.15} type="text" /><br />
      <label>Intress kokku</label>
      <input disabled value={intressKokku.toFixed(2)} type="text" /><br />
      {(laenusumma > 20000 && laenusumma < 10000000) ? 
        <div>Kuumakse: {kuumakse.toFixed(2)}€</div> :
        <div>Laenusumma võib olla vahemikus 20 000-10 000 000 eurot.</div>
        }
    </div>
  )
}

export default LaenuKalkulaator