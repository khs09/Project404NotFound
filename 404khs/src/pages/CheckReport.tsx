import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

interface Report {
  id: number;
  title: string;
  content: string;
  submitter: string;
  date: string;
  status: "대기" | "승인" | "반려";
}

// 더미 데이터
const initialReports: Report[] = [
  {
    id: 1,
    title: "주간 업무 보고",
    content: "이번 주 주요 업무는 시스템 점검 및 보고서 작성이었습니다.",
    submitter: "본인",
    date: "2025-08-10",
    status: "승인",
  },
  {
    id: 2,
    title: "월간 회의 보고",
    content: "이번 달 회의 내용과 결과 보고.",
    submitter: "본인",
    date: "2025-08-09",
    status: "대기",
  },
];

export default function CheckReport() {
  const [reports] = useState<Report[]>(initialReports);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  return (
    <Container className="mt-4">
      <Row>
        {/* 보고서 목록 */}
        <Col md={4}>
          <h4>제출한 보고서</h4>
          {reports.length === 0 ? (
            <p className="text-muted">작성된 보고서가 없습니다.</p>
          ) : (
            <ListGroup>
              {reports.map((report) => (
                <ListGroup.Item
                  key={report.id}
                  action
                  active={selectedReport?.id === report.id}
                  onClick={() => setSelectedReport(report)}
                >
                  <div>
                    <strong>{report.title}</strong>
                    <br />
                    <small>상태: {report.status}</small>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        {/* 상세 */}
        <Col md={8}>
          {selectedReport ? (
            <Card>
              <Card.Body>
                <Card.Title>{selectedReport.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  제출자: {selectedReport.submitter} | 날짜: {selectedReport.date}
                </Card.Subtitle>
                <Card.Text>{selectedReport.content}</Card.Text>
                <Card.Text>상태: {selectedReport.status}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p className="text-muted">보고서를 선택하세요.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}