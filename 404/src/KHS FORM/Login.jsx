import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`로그인 시도: ${username} / ${password}`);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">로그인</h3>
      <div className="mb-3">
        <label className="form-label">아이디</label>
        <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">비밀번호</label>
        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary w-100" onClick={handleLogin}>로그인</button>
    </div>
  );
}