import { useRef, useState } from "react"

function MaksimaalneKalkulaator() {
  const ylalpeetavadRef = useRef();
  const sissetulekRef = useRef();
  const kohustusedRef = useRef();
  const [maksimaalne, setMaksimaalne] = useState(90000);

  function arvutaMaksimaalne() {
    setMaksimaalne(
      100 * (sissetulekRef.current.value - kohustusedRef.current.value 
        * (1 + ylalpeetavadRef.current.value /10)));
  }

  return (
    <div>
      <label>Ülalpeetavad</label>
      {/* <input type="text" /><br /> */}
      <select onChange={arvutaMaksimaalne} ref={ylalpeetavadRef}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option value="5">5+</option>
      </select>
      <label>Netosissetulek</label>
      <input onChange={arvutaMaksimaalne} ref={sissetulekRef} defaultValue={1500} type="text" /><br />
      <label>Igakuised kohustused</label>
      <input onChange={arvutaMaksimaalne} ref={kohustusedRef} defaultValue={600} type="text" /><br />
      {maksimaalne > 3000 ? 
        <div>Maksimaalne laenusumma: {maksimaalne.toFixed(2)} €</div> :
        <div>Maksimaalse limiidi arvutamiseks on netosissetulek liiga väike või igakuised kohustused liiga suured.</div>
        }
    </div>
  )
}

export default MaksimaalneKalkulaator