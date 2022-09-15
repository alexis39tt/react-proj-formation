import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import FormResult from "./components/FormResult";
import ApiCall from "./components/ApiCall";
import Navbar from "./components/Navbar";

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/result" element={<FormResult />} />
      <Route path="/api" element={<ApiCall />} />
    </Routes>
  </>);
}

export default App;