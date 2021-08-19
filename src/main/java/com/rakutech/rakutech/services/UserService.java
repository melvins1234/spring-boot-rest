package com.rakutech.rakutech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rakutech.rakutech.model.User;
import com.rakutech.rakutech.repository.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public Optional<User> getUser(long id) {
		return userRepository.findById(id);
	}
	
	public void deleteProduct(long id) {
		userRepository.deleteById(id);
	}
	
	public List<User> productList(){
		return userRepository.findAll();
	}
}
