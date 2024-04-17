package com.toy.user.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.toy.user.dto.UserDTO;
import com.toy.user.entity.User;
import com.toy.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository userRepository;
	
	// 회원가입
	public User join(UserDTO userDTO) {

        User user = new User();
        user.setUserId(userDTO.getUserId());
        user.setPassword(userDTO.getPassword());
        user.setNickname(userDTO.getNickname());
        user.setName(userDTO.getName());
        user.setPhone(userDTO.getPhone());
        user.setEmail(userDTO.getEmail());
        user.setJoinDate(LocalDate.now());

        return userRepository.save(user);
    }
	
	// ID 중복확인
	public boolean checkUserId(String nickname) {
		return userRepository.existsByUserId(nickname);
	}

	
	// 조회
	public Page<User> findPage(int page, int pageSize, String sort) {
        Pageable pageable = PageRequest.of(page, pageSize, Sort.by(sort));
        return userRepository.findAll(pageable);
    }
	
	// 수정
	public User updateUser(String userId, UserDTO userDTO) {
		
        User existingUser = userRepository.findByUserId(userId);

        existingUser.setNickname(userDTO.getNickname());
        existingUser.setPassword(userDTO.getPassword());

        return userRepository.save(existingUser);
    }
	
	// 사용자 ID로 정보 조회
	public User getOnlyUser(Long id) {
		return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다: " + id));
	}
	

}
