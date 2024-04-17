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
    public ResponseEntity<User> registerUser(@RequestBody UserDTO userDTO) {
        User userJoin = userService.join(userDTO);

        return new ResponseEntity<>(userJoin, HttpStatus.CREATED);
    }
	
	
	// 조회
	@GetMapping("/list")
    public ResponseEntity<Page<User>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(defaultValue = "joinDate") String sort
    ) {
		Page<User> users = userService.findPage(page, pageSize, sort);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
	
	// 수정
	@PutMapping("/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable String userId, @RequestBody UserDTO userDTO) {
        User updatedUser = userService.updateUser(userId, userDTO);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
	
}