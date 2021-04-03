import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";


export const RomsList = ({roms} = []) => {

    const [selected, setSelected] = useState(0)
    const [paginatedGames, setPaginatedGames] = useState([])

    useEffect(() => {
        console.log(selected);
        setPaginatedGames([
            ...roms.slice(selected*10, selected*10 + 10)
        ])
    }, [selected])

    return <div>
        <ul>
            {paginatedGames.map((r, k) => {
                return <li key={k}>{r.file}</li>
            })}
        </ul>
        {roms.length > 0 && <ReactPaginate
            pageCount={Math.ceil(roms.length / 10)}
            marginPagesDisplayed={5}
            onPageChange={e => {
                setSelected(e.selected)
            }}
            pageRangeDisplayed={10}/>}
    </div>

}