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
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h3 className="text-center mb-4">보고서 제출</h3>
      <div className="mb-3">
        <label className="form-label">제목</label>
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">내용</label>
        <textarea className="form-control" rows="5" value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <button className="btn btn-success w-100" onClick={handleSubmit}>제출</button>
    </div>
  );
}