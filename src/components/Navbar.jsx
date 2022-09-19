import "bulma/css/bulma.css";
import "./NewsCard.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <h1 className="nav-title">Formik - API project</h1>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Form</Link>
                    <Link to="/api" className="navbar-item">News (API)</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;