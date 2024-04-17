package com.toy.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.toy.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	// userId 조회
	User findByUserId(String userId);
	
	// ID 중복확인
	Boolean existsByUserId(String userId);
	
	// id 조회
	Optional<User> findById(Long id);

}
