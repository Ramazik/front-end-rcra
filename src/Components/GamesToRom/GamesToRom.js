import {useSelector} from "react-redux";

export const GamesToRom = () => {
    const {gamesToRom} = useSelector(r=>r)
    console.log(gamesToRom)
    return <>
        {gamesToRom.length<1? 'empty': <ul>{gamesToRom.map((r, k) => <li key={k}>{r.name}</li>)}</ul>}
    </>
}