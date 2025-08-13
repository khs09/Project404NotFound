// @ts-nocheck
import React, { useState } from "react";
import Dashboard from "./KHS FORM/ApprovalReport";
import CheckReport from "./KHS FORM/CheckReport";
import SubmitReport from "./KHS FORM/SubmitReport";
import Login from "./KHS FORM/Login";

export default function App() {
  const [selectedPage, setSelectedPage] = useState(null);

  if (!selectedPage) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>페이지 목록</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          <div>
            <h4>로그인 페이지</h4>
            <button onClick={() => setSelectedPage("login")}>보기</button>
          </div>
          <div>
            <h4>업무 보고 페이지(직원)</h4>
            <button onClick={() => setSelectedPage("submit")}>보기</button>
          </div>
          <div>
            <h4>업무 보고 결재 페이지(관리자)</h4>
            <button onClick={() => setSelectedPage("dashboard")}>보기</button>
          </div>
          <div>
            <h4>업무 보고 목록 페이지(직원)</h4>
            <button onClick={() => setSelectedPage("check")}>보기</button>
          </div>
        </div>
      </div>
    );
  }

  let PageComponent = null;
  switch (selectedPage) {
    case "login":
      PageComponent = <Login />;
      break;
    case "submit":
      PageComponent = <SubmitReport />;
      break;
    case "dashboard":
      PageComponent = <Dashboard />;
      break;
    case "check":
      PageComponent = <CheckReport />;
      break;
    default:
      PageComponent = null;
  }

  return (
    <div>
      <button onClick={() => setSelectedPage(null)} style={{ margin: "20px" }}>
        ← 목록으로 돌아가기
      </button>
      {PageComponent}
    </div>
  );
}