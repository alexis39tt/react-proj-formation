import { useFormik, Formik } from "formik";
import "./Form.css";
import { Link } from "react-router-dom";

function Form() {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: false,
            gender: 'male'
        },
    })
    return (<>
        <form>
            <div className="inputs-container">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

            </div>
            <div className="inputs-container">
                <label htmlFor="age">Maggiorenne</label>
                <input type="checkbox" id="age" name="age" onChange={formik.handleChange} checked={formik.values.age} />
            </div>
            <div className="inputs-container">
                <label htmlFor="gender">Genere</label>
                <select id="gender" name="gender" onChange={formik.handleChange} value={formik.values.gender}>
                    <option value="male">Maschio</option>
                    <option value="female">Femmina</option>
                </select>
            </div>
            <div className="inputs-container">
                <button type="reset" className="button is-light">Reset</button>
                <Link to="/result" state={{values: formik.values}}><button type="submit" className="button is-info">Invia</button></Link>

            </div>
        </form>
        <div className="res">
            {JSON.stringify(formik.values)}
        </div>
    </>);
}

export default Form;