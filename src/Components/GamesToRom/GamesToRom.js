import {useDispatch, useSelector} from "react-redux";

export const GamesToRom = () => {
    const {gamesToRom} = useSelector(r=>r)
    const dispatch = useDispatch();
    const handleClearRomsList = () => {
        dispatch({
            type: "CLEAR_ROMS_LIST"
        })
    }
    return <>
        {gamesToRom.length<1? 'empty': <ul>{gamesToRom.map((r, k) => <li key={k}>{r.name} - {r.rom_id}</li>)}</ul>}
        <button onClick={handleClearRomsList}>Clear list</button>
    </>
}