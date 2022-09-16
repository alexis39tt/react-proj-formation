import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import ApiCall from "./components/ApiCall";
import Navbar from "./components/Navbar";

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/api" element={<ApiCall />} />
    </Routes>
  </>);
}

export default App;