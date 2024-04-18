import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Title } from '../common/Styled';
import { validateNickname, validatePassword } from '../common/ValidationUtils';

const UserDetailPage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [user, setUser] = useState({
    userId: '',
    password: '',
    name: '',
    nickname: '',
    phone: '',
    email: ''
  });
  const { id } = useParams();


  // id 값으로 회원 정보 가져옴
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  // 수정하기
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(user.password) || !validateNickname(user.nickname) ) {
      return;
    }

    try {
      const response = await axios.put(`${apiUrl}/${user.userId}`, user); 
      if (response.status === 200) {
        alert('사용자 정보가 성공적으로 업데이트되었습니다.');
        window.location.href = `/user`;
      } else if (response.status === 204) {
        alert('변경된 내용이 없습니다.');
      }
    } catch (error) {

        console.error('Error update user:', error);
        alert('사용자 정보 업데이트에 실패했습니다.');
    }

};

  if (!id) {
    return <div>사용자 ID가 없습니다.</div>;
  }

  return (
    <>
      <Title>UserDetails</Title>
      <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>아이디</Label>
          <Input type="text" name="userId" value={user.userId} disabled />
        </FormGroup>
        <FormGroup >
          <Label>비밀번호</Label>
          <Input type="password" name="password" value={user.password} onChange={handleChange} />
        </FormGroup>
        <FormGroup >
          <Label>닉네임</Label>
          <Input type="text" name="nickname" value={user.nickname} onChange={handleChange} />
        </FormGroup>
        <FormGroup >
          <Label>이름</Label>
          <Input type="text" name="name" value={user.name} disabled />
        </FormGroup>
        <FormGroup>
          <Label>전화번호</Label>
          <Input type="text" name="phone" value={user.phone} disabled />
        </FormGroup>
        <FormGroup>
          <Label>이메일</Label>
          <Input type="email" name="email" value={user.email}disabled  />
        </FormGroup>
        <Button type="submit">수정하기</Button>
      </Form>
    </Container>
    </>
  );
};

export default UserDetailPage;
