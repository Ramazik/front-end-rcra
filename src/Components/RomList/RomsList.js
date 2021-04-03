import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


export const RomsList = ({roms} = []) => {

    const [selected, setSelected] = useState(0)
    const dispatch = useDispatch();
    const [paginatedGames, setPaginatedGames] = useState([])
    const {gamesToRom} = useSelector(r => r)
    const perPage = 10; // сколько ромов на страницу

    useEffect(() => {
        setPaginatedGames([
            ...roms.slice(selected * perPage, selected * perPage + perPage)
        ])
    }, [selected])


    const handleRom = {
        addRom: id => {
            dispatch({
                type: 'ADD_ROM',
                payload: id,
            })
        },
        removeRom: id => {
            dispatch({
                type: 'REMOVE_ROM',
                payload: id,
            })
        }
    }


    return <div>
        <ul>
            {paginatedGames.map((r, k) => {
                return <li key={k}>
                    {r.file} - {r.description || ''}
                    {gamesToRom.includes(r.rom_id) ?
                        <button onClick={() => handleRom.removeRom(r.rom_id)}>Remove</button> :
                        <button onClick={() => handleRom.addRom(r.rom_id)}>Add</button>}
                </li>
            })}
        </ul>
        {roms.length > 0 && <ReactPaginate
            pageCount={Math.ceil(roms.length / 10)}
            marginPagesDisplayed={10}
            onPageChange={e => {
                setSelected(e.selected)
            }}
            pageRangeDisplayed={perPage}/>}
    </div>

}