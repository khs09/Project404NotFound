<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>회원가입</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f4f4f4; }
        .container { background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); width: 350px; text-align: center; }
        h2 { margin-bottom: 20px; color: #333; }
        label { display: block; text-align: left; margin-bottom: 5px; color: #555; }
        input[type="text"], input[type="email"], input[type="password"] { width: calc(100% - 20px); padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 4px; }
        button { width: 100%; padding: 10px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
        button:hover { background-color: #218838; }
        .message { margin-bottom: 15px; padding: 10px; border-radius: 4px; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .login-link { margin-top: 15px; font-size: 14px; }
        .login-link a { color: #007bff; text-decoration: none; }
        .login-link a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h2>회원가입</h2>
        <c:if test="${not empty errorMessage}">
            <div class="message error">${errorMessage}</div>
        </c:if>

        <form action="<c:url value='/register'/>" method="post">
            <div>
                <label for="id">아이디:</label>
                <input type="text" id="id" name="id" value="${user.id}" required>
            </div>
            <div>
                <label for="password">비밀번호:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div>
                <label for="email">이메일:</label>
                <input type="email" id="email" name="email" value="${user.email}" required>
            </div>
            <div>
                <label for="username">이름:</label>
                <input type="text" id="username" name="username" value="${user.username}">
            </div>
            <button type="submit">회원가입</button>
        </form>
        <div class="login-link">
            이미 계정이 있으신가요? <a href="<c:url value='/login'/>">로그인</a>
        </div>
    </div>
</body>
</html>