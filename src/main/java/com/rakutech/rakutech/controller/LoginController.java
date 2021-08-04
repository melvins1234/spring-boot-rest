package com.rakutech.rakutech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {
	

	@RequestMapping("")
	public String loginPage(Model model) {
		return "login";
	}

}
