package com.toy.user.service;

import java.time.LocalDate;

import javax.persistence.EntityNotFoundException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.toy.user.dto.UserDTO;
import com.toy.user.entity.User;
import com.toy.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository userRepository;
	
	// 회원가입
	public User join(UserDTO userDTO) {
		log.info("join service");
		
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
		log.info("checkUserId service");
		
		return userRepository.existsByUserId(nickname);
	}

	
	// 조회
	public Page<User> userPage(int page, int pageSize, String sort) {
		
		log.info("findPage service");
		
        Pageable pageable = PageRequest.of(page, pageSize, Sort.by(sort));
        return userRepository.findAll(pageable);
    }
	
	// 수정
	public User updateUser(String userId, UserDTO userDTO) {
		
		log.info("updateUser service");
        
		User existingUser = userRepository.findByUserId(userId);
		
		log.info("existingUser :: " + existingUser);
        
        if (existingUser == null) {
            throw new EntityNotFoundException("UserID에 대한 사용자를 찾을 수 없습니다.");
        }
        
        // 변경된 값이 있다면 업데이트 수행
        boolean isPassword = !existingUser.getPassword().equals(userDTO.getPassword());
        boolean isNickname = !existingUser.getNickname().equals(userDTO.getNickname());
        	
        if (isPassword || isNickname) {
        	existingUser.setNickname(userDTO.getNickname());
        	existingUser.setPassword(userDTO.getPassword());

        	return userRepository.save(existingUser);

        } else {
        	throw new IllegalArgumentException("변경된 내용이 없습니다.");
        }

    }
	
	// 사용자 ID로 정보 조회
	public User getOnlyUser(Long id) {
		log.info("getOnlyUser service");
		
		return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다: " + id));
	}
	

}
