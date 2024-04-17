import React, { useState } from 'react';
import axios from 'axios';
import { Container, Title, Form, FormGroup, Label, Input, Button } from '../common/Styled';
import { validateUserId, validatePassword, validateNickname, validateName, validatePhone, validateEmail } from '../common/ValidationUtils'; 


function JoinPage() {

  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    nickname: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // phone "-" 값 제거
    const processedValue = value.replace(/-/g, ''); 
    setFormData({ ...formData, [name]: processedValue });

  };

  const [isUserIdChecked, setIsUserIdChecked] = useState(false);

  // Id 중복확인
  const checkUserId = async () => {
    if (!validateUserId(formData.userId)) {
      return;
    }
    
    try {
        const response = await axios.get(`${apiUrl}/isExist/${formData.userId}`);
        const isDuplicate = response.data;
        if (isDuplicate) {
            alert('이미 사용 중인 ID 입니다.');
        } else {
            alert('사용 가능한 ID 입니다.');
            setIsUserIdChecked(true);
        }
    } catch (error) {
        console.error('Error checking nickname:', error);
    }
  };

  // 회원가입 버튼
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateUserId(formData.userId) || !validatePassword(formData.password) || !validateNickname(formData.nickname) || !validateName(formData.name) || !validatePhone(formData.phone) || !validateEmail(formData.email)) {
      return;
    }

    if(!isUserIdChecked) {
      alert('중복검사를 해주세요.');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/join`, formData);
      alert("회원가입이 완료되었습니다. 환영합니다 " + response.data.name + "님")

      // 회원가입 완료 메인을 돌아감
      window.location.href = "/";
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };


  return (
    <>
    <Title >회원가입</Title>
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>아이디</Label>
          <div>
            <Input type="text" name="userId" value={formData.userId} onChange={handleChange} />
            <Button type='button' onClick={checkUserId}>중복확인</Button>
          </div>
        </FormGroup>
        <FormGroup >
          <Label>비밀번호</Label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} />
        </FormGroup>
        <FormGroup >
          <Label>닉네임</Label>
          <Input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
        </FormGroup>
        <FormGroup >
          <Label>이름</Label>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>전화번호</Label>
          <Input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>이메일</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormGroup>
        <Button type="submit">가입하기</Button>
      </Form>
    </Container>
    </>
  );
}

export default JoinPage;
