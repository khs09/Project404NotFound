<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>대시보드</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background-color: #f4f4f4; }
        .container { background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
        h2 { margin-bottom: 20px; color: #333; }
        p { margin-bottom: 20px; color: #555; }
        a { padding: 10px 20px; background-color: #dc3545; color: white; text-decoration: none; border-radius: 4px; font-size: 16px; }
        a:hover { background-color: #c82333; }
    </style>
</head>
<body>
    <div class="container">
        <h2>환영합니다!</h2>
        <p>로그인에 성공했습니다.</p>
        <a href="<c:url value='/logout'/>">로그아웃</a>
    </div>
</body>
</html>