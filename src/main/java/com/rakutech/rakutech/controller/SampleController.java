package com.rakutech.rakutech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SampleController {

	@RequestMapping("/admin")
	public String adminPage() {
		return "<h1>Welcome Admin<h1/>";
	}
	
	@RequestMapping("/user")
	public String userPage() {
		return "<h1>Welcome User<h1/>";
	}
}
