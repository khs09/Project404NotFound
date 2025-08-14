import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
  const styles = {
    hero: {
      height: 300,
      backgroundImage: "url(/images/Generated.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    heroMask: {
      background: "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.35))",
    },
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* 상단 네비 */}
      <header>
        <nav className="navbar bg-white border-bottom">
          <div className="container-xxl">
            <Link className="navbar-brand fw-bold" to="/">✈ 그룹웨어</Link>
            <ul className="navbar-nav flex-row gap-3">
              <li className="nav-item"><span className="nav-link">전자결재시스템</span></li>
              <li className="nav-item"><span className="nav-link">문서보관소</span></li>
              <li className="nav-item"><span className="nav-link">업무보고시스템</span></li>
              <li className="nav-item"><span className="nav-link">커뮤니케이션기능</span></li>
              <li className="nav-item"><span className="nav-link">일정관리</span></li>
            </ul>
            <div className="ms-auto">
              <Link to="/login" className="btn btn-outline-secondary btn-sm">
                로그인
              </Link>
            </div>
          </div>
        </nav>

        {/* 상단 배너(히어로) */}
        <section className="position-relative" style={styles.hero}>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={styles.heroMask} />
          <div className="container-xxl position-relative" style={{ zIndex: 1 }}>
            <div className="py-5">
              <h1 className="display-5 fw-bold text-white mb-0">로그인</h1>
            </div>
          </div>
        </section>
      </header>

      {/* 본문 - 로그인 폼 중앙 */}
      <main className="container-xxl py-4 flex-grow-1 d-flex justify-content-center align-items-start">
        <div className="card p-4 shadow-sm mt-4" style={{ width: 400 }}>
          <h3 className="mb-4 text-center">로그인</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">아이디</label>
              <input type="text" className="form-control" id="username" placeholder="아이디 입력" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">비밀번호</label>
              <input type="password" className="form-control" id="password" placeholder="비밀번호 입력" />
            </div>
            <button type="submit" className="btn btn-primary w-100">로그인</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;