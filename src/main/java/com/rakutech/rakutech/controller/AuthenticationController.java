package com.rakutech.rakutech.controller;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.dto.UserDTO;
import com.rakutech.rakutech.model.Product;
import com.rakutech.rakutech.model.User;
import com.rakutech.rakutech.repository.UserRepository;
import com.rakutech.rakutech.services.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;
	
	@PostMapping("auth")
	public UserDTO log(@RequestParam("email") String email, 
					@RequestParam("password") String pwd) {
		
		User user = userRepository.findByEmailAddressPass(email, pwd);
		String token = getJWTToken(email);
		UserDTO userDTO = new UserDTO(user.getId(), user.getEmail(), user.getPassword(), user.getFullName(), user.getBillingAddress(),
				user.getDefaultShippingAddress(), user.getSecondaryShippingAddress(), user.getPhone(), user.getRoles(), user.getCountry(),
				user.getImage(), token);
		
		System.out.println(userDTO);
		
		return userDTO;
	}
	
	private String getJWTToken(String username) {
		String secretKey = "mySecretKey";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER");
		
		String token = Jwts
				.builder()
				.setId("softtekJWT")
				.setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512,
						secretKey.getBytes()).compact();

		return "Bearer " + token;
	}
	
    @PostMapping("/api/users")
    ResponseEntity<User> createProduct(@RequestBody User user) throws URISyntaxException, IOException {
    	User result = userService.saveUser(user);
        return ResponseEntity.created(new URI("/user/group/" + result.getId()))
                .body(result);
    }
    
	@GetMapping("/api/user/{value}")
	ResponseEntity<?> getUserByEmail(@PathVariable String value) throws NumberFormatException{
		Optional<User> user;
		if(value.contains("@")) 
			user= userRepository.findByEmailAddress(value);
		else
			user = userRepository.findById(Long.parseLong(value));
		
		return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@GetMapping("/api/users")
	ResponseEntity<Optional<List<User>>> users() {
		Optional<List<User>> userList = userService.userList();
		 
        return new ResponseEntity<Optional<List<User>>>(userList, new HttpHeaders(), HttpStatus.OK); 
	}
    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
    	userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
