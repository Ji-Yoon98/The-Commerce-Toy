## 👋🏻 User Toy
과제 진행 : 회원가입, 회원 조회 및 페이징, 수정

Spring boot + React로 진행하였습니다.

## 🪛 Skill
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">

## 📚 API 문서 및 테스트(POSTMAN)
https://documenter.getpostman.com/view/33421154/2sA3BkdZ1c

## 🖥️ 화면구성 및 기능
<table>
  <thead>
    <tr>
      <th style="text-align: center;">메인페이지</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <a href="imges/signup.png" target="_blank">
          <img width="329" src="imges/main.png" style="max-width: 100%;">
        </a>  
      </td>
    </tr>
  </tbody>
</table>

- join : 회원가입
- User : 회원조회 및 페이징, 정렬

<br/>
<table>
  <thead>
    <tr>
      <th style="text-align: center;">회원가입</th>
      <th style="text-align: center;">회원조회 및 페이징, 정렬</th>
      <th style="text-align: center;">회원상세, 수정</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <a href="imges/join.png" target="_blank">
          <img width="329" src="imges/join.png" style="max-width: 100%;">
        </a>
      </td>
      <td align="center">
        <a href="imges/userSelect.png" target="_blank">
          <img width="329" src="imges/userSelect.png" style="max-width: 100%;">
          </a>
      </td>
      <td align="center">
        <a href="imges/userDetail.png" target="_blank">
        <img width="329" src="imges/userDetail.png" 
        style="max-width: 100%;"></a>
      </td>
    </tr>
  </tbody>
</table>

- 회원가입 : 비밀번호 8자 이상 && 숫자 포함, 이름은 한글, 중복확인 필수
- 회원조회 및 페이징, 정렬 : 모든 회원 정보 조회, 가입일/이름으로 정렬, 수정하고 싶은 user click -> 회원 상세 페이지로 이동
- 회원상세, 수정 : ID값으로 회원 조회, 닉네임과 비밀번호 수정가능(변경사항이 없다면 수정X)
