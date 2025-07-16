<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <title>로그인</title>
    <link rel="stylesheet" href="<c:url value="/css/style.css"/>">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;          
            justify-content: center; 
            align-items: center;   
            min-height: 100vh;     
            margin: 0;
        }

        .login-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center; 
        }

        h2 {
            color: #333;
            margin-bottom: 20px;
        }

        .welcome-message {
            margin-bottom: 20px;
            font-size: 1.1em;
            color: #666;
            text-align: center; 
        }

        .message-box {
            background-color: #e9f7ef;
            color: #28a745;
            border: 1px solid #c3e6cb;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 4px;
            text-align: center;
        }

        .error-message {
            background-color: #f8d7da;
            color: #dc3545;
            border: 1px solid #f5c6cb;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 4px;
            text-align: center;
        }

        .input-group {
            margin-bottom: 15px;
            text-align: left;
        }

        .input-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        .input-group input[type="text"],
        .input-group input[type="password"] {
            width: calc(100% - 20px);
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>로그인</h2>

        <div class="welcome-message">
            <p>직원 또는 관리자 계정으로 로그인하여 <br> 해당 대시보드에 접속하세요.</p>
        </div>

        <c:if test="${not empty param.error}">
            <div class="error-message">
                아이디 또는 비밀번호가 올바르지 않습니다.
            </div>
        </c:if>
        <c:if test="${not empty param.logout}">
            <div class="message-box">
                로그아웃되었습니다.
            </div>
        </c:if>
        <c:if test="${not empty errorMessage}">
            <div class="error-message">
                <c:out value="${errorMessage}"/>
            </div>
        </c:if>

        <form action="<c:url value="/login"/>" method="post">
            <div class="input-group">
                <label for="id">아이디:</label>
                <input type="text" id="id" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">비밀번호:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">로그인</button>
        </form>
    </div>
</body>
</html>