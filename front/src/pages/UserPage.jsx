import {React, useState, useEffect} from "react";
import axios from 'axios';
import { Container, Tab, Title, Table, TableHeader, TableRow, TableCell, TbodyRow } from '../common/Styled';
import Pagination from '../common/Pagination';

function UserPage() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState('joinDate');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {

    const apiUrl = process.env.REACT_APP_API_URL;

    const userList = async () => {
      try {
        const response = await axios.get(`${apiUrl}/list?page=${page}&pageSize=${pageSize}&sort=${sort}`);
        setUsers(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error users:', error);
      }
    };

    userList();
  }, [page, pageSize, sort]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  // 회원 상세 페이지로 이동
  const handleRowClick = (id) => {
    window.location.href = `/user/${id}`;
  };

  // 가입일 순 정렬 함수
  const sortByJoinDate = () => {
    setSort('joinDate');
  };

  // 이름 순 정렬 함수
  const sortByName = () => {
    setSort('name');
  };


  return (
    <>
    <Container>
    <Tab>
      <a href="/">&lt;</a>
      <Title>회원 정보</Title>
      <div>
        <button onClick={sortByJoinDate}>가입일</button>
        <button onClick={sortByName}>이름</button>
      </div>
    </Tab>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>아이디</TableCell>
          <TableCell>비밀번호</TableCell>
          <TableCell>닉네임</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>전화번호</TableCell>
          <TableCell>이메일</TableCell>
          <TableCell>가입일</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {users.map((user) => (
          <TbodyRow key={user.id} onClick={() => handleRowClick(user.id)}>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>{user.nickname}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.joinDate}</TableCell>
          </TbodyRow>
        ))}
      </tbody>
    </Table>
    </Container>
    <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} />
    </>
  );
}

export default UserPage;
