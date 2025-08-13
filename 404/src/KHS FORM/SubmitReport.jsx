// @ts-nocheck
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SubmitReport() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    alert(`보고서 제출됨\n제목: ${title}\n내용: ${content}`);
    setTitle("");
    setContent("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div className="card p-4 shadow" style={{ width: "500px", borderRadius: "10px" }}>
        <h3 className="text-center mb-4">보고서 제출</h3>
        <div className="mb-3">
          <label className="form-label">제목</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">내용</label>
          <textarea className="form-control" rows="6" value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button className="btn btn-success w-100" onClick={handleSubmit}>제출</button>
      </div>
    </div>
  );
}