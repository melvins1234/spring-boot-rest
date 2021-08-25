package com.rakutech.rakutech.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.rakutech.rakutech.model.Admin;
import com.rakutech.rakutech.repository.AdminRepository;

public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin admin = adminRepository.getAdminByEmail(username);
		if (admin == null) {
            throw new UsernameNotFoundException("Could not find user");
        }
		 return new MyUserDetails(admin);
	}

}
