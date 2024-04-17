package com.toy.user.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.toy.user.dto.UserDTO;
import com.toy.user.entity.User;
import com.toy.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	private final UserService userService;
	
	// 회원가입
	@PostMapping("/join")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        User userJoin = userService.join(userDTO);

        if (userJoin != null) {
            // 정상적으로 생성
            return new ResponseEntity<>(userJoin, HttpStatus.CREATED);
        } else {
            // 실패
            return new ResponseEntity<>("Failed to create user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	// ID 중복확인
	@GetMapping("/isExist/{userId}")
	public ResponseEntity<Boolean> checkNickname(@PathVariable String userId) {

		boolean isDuplicate  = userService.checkUserId(userId);

		return ResponseEntity.ok(isDuplicate);
	}

	// 회원 조회 및, 페이징 처리
	@GetMapping("/list")
    public ResponseEntity<Page<User>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(defaultValue = "joinDate") String sort
    ) {
		Page<User> users = userService.findPage(page, pageSize, sort);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
	
	// 회원 정보 수정 (비밀번호,닉네임)
	@PutMapping("/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable String userId, @RequestBody UserDTO userDTO) {
        User updatedUser = userService.updateUser(userId, userDTO);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
	
	// 각 회원 조회
	@GetMapping("/{id}")
	public ResponseEntity<User> getOnlyUser(@PathVariable Long id) {
		 User user = userService.getOnlyUser(id);
		    return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
}
