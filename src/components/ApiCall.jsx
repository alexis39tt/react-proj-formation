import axios from "axios";
import "bulma/css/bulma.css";
import NewsCard from "./NewsCard";
import "./NewsCard.css"
import { useEffect, useState } from "react";

function ApiCall() {
    let [news, setNews] = useState(null)
    async function getNews() {
        await axios.get("https://inshorts.deta.dev/news?category=technology")
            .then((res) => {
                setNews(res.data)
            })
    }
    useEffect(() => {
        getNews();
    }, [])

    return (<>
        {!news && <div className="spinner"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}
        {news && news.data.map((el, i) => <NewsCard info={el} key={i} />)}
    </>);
}

export default ApiCall;