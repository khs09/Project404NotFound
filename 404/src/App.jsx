import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReportList from './KHS FORM/ReportList.jsx';
import ReportWrite from './KHS FORM/ReportWrite.jsx';
import Login from './KHS FORM/Login.jsx'; 
import ReportApproval from './KHS FORM/ReportApproval.jsx'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReportList />} />
          <Route path="/ReportWrite" element={<ReportWrite />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/ReportApproval" element={<ReportApproval />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;