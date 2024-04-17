package com.toy.user.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(unique = true)
	private String userId;		// 아이디
	
	private String password;	// 패스워드

	private String nickname;	// 닉네임

	private String name;		// 이름
	
	private String phone;		// 핸드폰 번호
	
	private String email;		// 이메일
	
	private LocalDate joinDate;	// 가입날짜
}
