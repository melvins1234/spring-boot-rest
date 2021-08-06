package com.rakutech.rakutech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/register")
public class RegisterController {
	
	@RequestMapping("")
	public String registerPage(Model model) {
		return "register";
	}
}
