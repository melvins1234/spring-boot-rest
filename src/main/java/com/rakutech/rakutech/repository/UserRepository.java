package com.rakutech.rakutech.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rakutech.rakutech.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
}
