package com.rakutech.rakutech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.rakutech.rakutech.repository.UserRepository;

@SpringBootApplication
@ComponentScan(basePackages = { "com.rakutech.rakutech"} )
public class RakutechApplication {

	public static void main(String[] args) {
		SpringApplication.run(RakutechApplication.class, args);
	}

}
