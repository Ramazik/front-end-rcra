import './App.css';
import {useEffect} from "react";
import {fetchGamesFromApi} from "./Services";
import {useDispatch, useSelector} from "react-redux";
import {RomsList} from "./Components/RomList/RomsList";


function App() {

    const dispatch = useDispatch();
    const {games} = useSelector(r=>r.gameList)

    useEffect(()=>{
        console.log(games.length)
    }, [games])
    useEffect(() => {
        fetchGamesFromApi()
            .then(r => {
                dispatch({
                    type: 'FETCH_ROMS_LIST',
                    payload: r.data.roms,
                })
            })
    }, [])

    return (
        <div className="App">
            {games.length > 0 ? <RomsList roms={games} />: 'Loading'}
        </div>
    );
}

export default App;
