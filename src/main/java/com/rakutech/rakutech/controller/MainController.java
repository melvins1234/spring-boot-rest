package com.rakutech.rakutech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/products")
public class MainController {

	@RequestMapping("/categories")
	public String adminPage(Model model) {
		model.addAttribute("classActiveSettings","show");
		model.addAttribute("ariaExpanded","true");
		return "category";
	}
	
}
