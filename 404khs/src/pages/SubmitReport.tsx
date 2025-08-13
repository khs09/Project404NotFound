import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

interface Report {
  id: number;
  title: string;
  submitter: string;
  date: string;
  status: string;
  content: string;
}

interface SubmitReportProps {
  onSubmit: (report: Report) => void;
}

const SubmitReport: React.FC<SubmitReportProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newReport: Report = {
      id: Date.now(),
      title,
      submitter: "직원", // 임시 이름
      date: new Date().toISOString().split("T")[0],
      status: "대기",
      content,
    };

    onSubmit(newReport);

    // 입력 초기화
    setTitle("");
    setContent("");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "500px" }} className="p-4 shadow">
        <h3 className="mb-4 text-center">업무 보고 시스템</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="보고서 제목 입력"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="보고서 내용 입력"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            제출
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SubmitReport;