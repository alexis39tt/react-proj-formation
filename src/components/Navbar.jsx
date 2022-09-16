import "bulma/css/bulma.css";
import "./NewsCard.css"

function Navbar() {
    return (
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <h1 className="nav-title">Formik - API project</h1>
                <div className="navbar-start">
                    <a href="/" className="navbar-item">Form</a>
                    <a href="/api" className="navbar-item">News (API)</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;