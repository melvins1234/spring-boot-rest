package com.rakutech.rakutech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rakutech.rakutech.repository.CategoryRepository;

@Controller
@RequestMapping("/products")
public class MainController {
	
	@Autowired
	CategoryRepository categoryRepository;

	@RequestMapping("/categories")
	public String adminPage(Model model) {
		model.addAttribute("classActiveSettings","show");
		model.addAttribute("ariaExpanded","true");
		return "category";
	}
//   @PostMapping("/categories/save")
//   public String saveUser(Category category,
//           @RequestParam("image") MultipartFile multipartFile, HttpServletRequest request) throws IOException {
//        
//       String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//       category.setThumbnail("http://"+request.getLocalAddr()+":5000/api/images/"+fileName);      
//       
//       Category savedCategory = categoryRepository.save(category);
//
//       String uploadDir = "images/";
//
//       FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
//        
//       return "redirect:/products/categories";
//   }
	
}
