import {useDispatch, useSelector} from "react-redux";

const styles = {
    listItem: {
        padding:"10px 20px",
    }
}

export const GamesToRom = () => {
    const {gamesToRom} = useSelector(r=>r)
    const dispatch = useDispatch();
    const handleClearRomsList = () => {
        dispatch({
            type: "CLEAR_ROMS_LIST"
        })
    }
    const handleRemoveRom = id => {
        dispatch({
            type: 'REMOVE_ROM',
            payload: id,
        })
    }
    return <>
        {gamesToRom.length<1? 'empty': <ul>{gamesToRom.map((r, k) =>
            <li key={k} style={styles.listItem}>
                {r.name} - {r.rom_id} <button onClick={()=>handleRemoveRom(r)}>Remove</button>
            </li>)}</ul>}
        <button onClick={handleClearRomsList}>Clear list</button>
    </>
}