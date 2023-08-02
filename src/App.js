
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main pathName="basic-info" />} />
          <Route path="/basic-info" element={<Main pathName="basic-info" />} />
          <Route path="/work-details" element={<Main pathName="work-details" />} />
          <Route path="/work-plan" element={<Main pathName="work-plan" />} />
          <Route path="/work-finish" element={<Main pathName="work-finish" />} />
        </Routes>
      </Router>
    </div>
  );
}

