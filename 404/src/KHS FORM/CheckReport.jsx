// @ts-nocheck
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CheckReport() {
  const initialReports = [
    { id: 1, title: "주간 업무 보고", content: "이번 주 주요 업무는 시스템 점검 및 보고서 작성이었습니다.", submitter: "본인", date: "2025-08-10", status: "승인" },
    { id: 2, title: "월간 회의 보고", content: "이번 달 회의 내용과 결과 보고.", submitter: "본인", date: "2025-08-09", status: "대기" },
  ];

  const [reports] = useState(initialReports);
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h4>제출한 보고서</h4>
          {reports.length === 0 ? <p className="text-muted">작성된 보고서가 없습니다.</p> :
            <ul className="list-group">
              {reports.map(report => (
                <li key={report.id} className={`list-group-item ${selectedReport?.id === report.id ? "active" : ""}`} onClick={() => setSelectedReport(report)} style={{ cursor: "pointer" }}>
                  <strong>{report.title}</strong><br />
                  <small>상태: {report.status}</small>
                </li>
              ))}
            </ul>
          }
        </div>

        <div className="col-md-8">
          {selectedReport ? (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{selectedReport.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">제출자: {selectedReport.submitter} | 날짜: {selectedReport.date}</h6>
                <p className="card-text">{selectedReport.content}</p>
                <p>상태: {selectedReport.status}</p>
              </div>
            </div>
          ) : <p className="text-muted">보고서를 선택하세요.</p>}
        </div>
      </div>
    </div>
  );
}