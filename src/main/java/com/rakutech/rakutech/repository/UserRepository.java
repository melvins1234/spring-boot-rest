package com.rakutech.rakutech.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.rakutech.rakutech.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("SELECT u from User u WHERE u.email = :email")
	Optional<User> findByEmailAddress(@Param("email") String email);
	
	@Query("SELECT u from User u WHERE u.email = :email AND u.password = :password")
	Optional<User> findByEmailAddressPass(@Param("email") String email, 
			@Param("password") String password);
}
