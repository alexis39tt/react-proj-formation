import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Result() {
    let [result, setResult] = useState('a')
    const location = useLocation();

    useEffect(() => {
        setResult(location.state.values)
    }, [])

    return (
        <div className="card">
            <h1 className="is-size-3"><span className="title">Nome: </span>{result.name}</h1>
            <h1 className="is-size-3"><span className="title">Età: </span>{result.age ? "Maggiorenne" : "Minorenne"}</h1>
            <h1 className="is-size-3"><span className="title">Genere: </span>{result.gender == "male" ? "Maschio" : "Femmina"}</h1>
        </div>
    )
}

export default Result;