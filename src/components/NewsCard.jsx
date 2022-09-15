import "bulma/css/bulma.css";
import "./NewsCard.css";

function NewsCard(props) {
    return (<a href={props.info.url}>
        <div className="card">
            <div className="card-header">
                <figure className="image is-128x128">
                    <img src={props.info.imageUrl} alt={props.info.title} />
                </figure>
                <div>
                    <h1 className="title">{props.info.title}</h1>
                    <h2 className="author is-size-4">di {props.info.author} - {props.info.date}</h2>
                </div>
            </div>
            <div className="card-content">
                <p>{props.info.content}</p>
            </div>
            <div className="link-icon">
            <i className="fa-solid fa-link"></i>
            </div>
        </div>
    </a>);
}

export default NewsCard;