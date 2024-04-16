package com.toy.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.toy.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
