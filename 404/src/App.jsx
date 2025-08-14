import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckReport from './KHS FORM/CheckReport';
import SubmitReport from './KHS FORM/SubmitReport';
import Login from './KHS FORM/Login.jsx'; 
import ApprovalReport from './KHS FORM/ApprovalReport'; // 추가

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckReport />} />
          <Route path="/SubmitReport" element={<SubmitReport />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/ApprovalReport" element={<ApprovalReport />} /> {/* 추가 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;