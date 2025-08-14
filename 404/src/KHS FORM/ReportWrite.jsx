// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ReportWrite() {
  const styles = {
    hero: {
      height: 300,
      backgroundImage: "url(/src/images/flight.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    heroMask: {
      background: "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.35))",
    },
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      

      {/*  배너 */}
      <header>
        
        <section className="position-relative" style={styles.hero}>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={styles.heroMask} />
          <div className="container-xxl position-relative" style={{ zIndex: 1 }}>
            <div className="py-5">
              <h1 className="display-5 fw-bold text-white mb-0">업무 보고 작성</h1>
            </div>
          </div>
        </section>
      </header>

      {/* 본문 */}
      <main className="container-xxl py-4 flex-grow-1">
        <div className="card shadow-sm">
          <div className="card-body">
            <form>
              {/* 제목 */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-bold">제목</label>
                <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요" />
              </div>

              {/* 유형 */}
              <div className="mb-3">
                <label htmlFor="type" className="form-label fw-bold">보고 유형</label>
                <select id="type" className="form-select">
                  <option value="">선택하세요</option>
                  <option value="daily">일일 안전 리포트</option>
                  <option value="incident">항공기 이상 보고서</option>
                  <option value="operation">운항 상황 보고</option>
                  <option value="ground">지상 상황 보고</option>
                </select>
              </div>

              {/* 내용 */}
              <div className="mb-3">
                <label htmlFor="content" className="form-label fw-bold">내용</label>
                <textarea id="content" className="form-control" rows="8" placeholder="보고서 내용을 작성하세요"></textarea>
              </div>

              {/* 첨부파일 */}
              <div className="mb-3">
                <label htmlFor="file" className="form-label fw-bold">첨부 파일</label>
                <input type="file" className="form-control" id="file" />
              </div>

              {/* 버튼 */}
              <div className="d-flex justify-content-between">
                <Link to="/" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-left"></i> 목록
                </Link>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-check-lg"></i> 제출
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* 우측 하단 버튼 */}
      <div className="position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2">
        <Link to="/" className="btn btn-light shadow-sm border">
          <i className="bi bi-house" aria-hidden="true"></i> 홈으로
        </Link>
      </div>
    </div>
  );
}

export default ReportWrite;