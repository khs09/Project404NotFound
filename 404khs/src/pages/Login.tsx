import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

interface LoginProps {
  onLogin: () => void; 
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    } else {
      alert("아이디와 비밀번호를 입력하세요.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="mb-4 text-center">로그인</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" placeholder="아이디 입력" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">로그인</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;