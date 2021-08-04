package com.rakutech.rakutech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.rakutech.rakutech.model.User;
import com.rakutech.rakutech.services.UserService;
import com.rakutech.rakutech.validator.UserValidator;

@Controller
@RequestMapping("/register")
public class RegisterController {
	
    @Autowired
    private UserService userService;
	
    @Autowired
    private UserValidator userValidator;
	
	@RequestMapping("")
	public String registerPage(Model model) {
		return "register";
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String saveUser(@ModelAttribute("product") User user, BindingResult bindingResult, Model model) {
		
		userValidator.validate(user, bindingResult);

        if (bindingResult.hasErrors()) {
            return "registration";
        }

        userService.save(user);
	    return "redirect:/";
	}
}
