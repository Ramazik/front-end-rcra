import './App.css';
import {useEffect} from "react";
import {fetchGamesFromApi} from "./Services";
import {useDispatch, useSelector} from "react-redux";
import {RomsList} from "./Components/RomList/RomsList";
import {GamesToRom} from "./Components/GamesToRom/GamesToRom";


function App() {

    const dispatch = useDispatch();
    const {games} = useSelector(r=>r.gameList)
    useEffect(() => {
        fetchGamesFromApi()
            .then(r => {
                dispatch({
                    type: 'FETCH_ROMS_LIST',
                    payload: r.data.games,
                })
            })
    }, [])

    return (
        <div className="App">
            {games.length > 0 ? <RomsList roms={games} />: 'Loading'}
            <GamesToRom />
        </div>
    );
}

export default App;
