package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.rakutech.rakutech.model.User;

public interface UserRepository extends JpaRepositoryImplementation<User, String> {
	public User findByUsername(String username);
}
