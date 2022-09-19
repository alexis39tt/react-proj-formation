import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import ApiCall from "./components/ApiCall";
import Navbar from "./components/Navbar";
import Result from "./components/Result";

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/result" element={<Result />} />
      <Route path="/api" element={<ApiCall />} />
    </Routes>
  </>);
}

export default App;