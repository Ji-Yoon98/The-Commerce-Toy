export const validateUserId = (userId) => {
  if (!userId) {
    alert('아이디를 입력해주세요.');
    return false;
  }
  if (userId.length < 4) {
    alert('아이디는 4자 이상이어야 합니다.');
    return false;
  }
  return true;
};

export const validatePassword = (password) => {
  if (!password) {
    alert('비밀번호를 입력해주세요.');
    return false;
  }
  if (password.length < 8 || !/\d/.test(password)) {
    alert('비밀번호는 8자 이상이어야 하고, 숫자가 포함되어야 합니다.');
    return false;
  }
  return true;
};

export const validateNickname = (nickname) => {
  if (!nickname) {
    alert('닉네임을 입력해주세요.');
    return false;
  }
  return true;
};

export const validateName = (name) => {
  if (!name) {
    alert('이름을 입력해주세요.');
    return false;
  }

  if (!/^[가-힣]*$/.test(name)) {
    alert('이름은 한글로만 입력해주세요.');
    return false;
  }

  return true;
};


export const validatePhone = (phone) => {
  if (!phone) {
    alert('전화번호를 입력해주세요.');
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  if (!email) {
    alert('이메일을 입력해주세요.');
    return false;
  }
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('유효한 이메일 형식이 아닙니다.');
    return false;
  }
  return true;
};
