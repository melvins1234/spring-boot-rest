package com.rakutech.rakutech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DashboardController {

	@RequestMapping("/dashboard")
	public String dashboardPage() {
		return "dashboard";
	}
	
	@RequestMapping("/")
	public String adminPage() {
		return "redirect:/dashboard";
	}
}
