<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>로그인</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f4f4f4; }
        .container { background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); width: 300px; text-align: center; }
        h2 { margin-bottom: 20px; color: #333; }
        label { display: block; text-align: left; margin-bottom: 5px; color: #555; }
        input[type="text"], input[type="password"] { width: calc(100% - 20px); padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 4px; }
        button { width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
        button:hover { background-color: #0056b3; }
        .message { margin-bottom: 15px; padding: 10px; border-radius: 4px; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .logout { background-color: #cfe2ff; color: #084298; border: 1px solid #b6d4fe; }
        .register-link { margin-top: 15px; font-size: 14px; }
        .register-link a { color: #007bff; text-decoration: none; }
        .register-link a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h2>로그인</h2>
        <%-- 에러 메시지 --%>
        <c:if test="${not empty errorMessage}">
            <div class="message error">${errorMessage}</div>
        </c:if>
        <%-- 성공 메시지 --%>
        <c:if test="${not empty successMessage}">
            <div class="message success">${successMessage}</div>
        </c:if>
        <%-- 로그아웃 메시지 --%>
        <c:if test="${not empty logoutMessage}">
            <div class="message logout">${logoutMessage}</div>
        </c:if>

        <form action="<c:url value='/login'/>" method="post">
            <div>
                <label for="id">아이디:</label>
                <input type="text" id="id" name="id" required>
            </div>
            <div>
                <label for="password">비밀번호:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">로그인</button>
        </form>
        <div class="register-link">
            계정이 없으신가요? <a href="<c:url value='/register'/>">회원가입</a>
        </div>
    </div>
</body>
</html>