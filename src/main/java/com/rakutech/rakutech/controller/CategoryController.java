package com.rakutech.rakutech.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.model.Category;
import com.rakutech.rakutech.repository.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	@Autowired
	CategoryRepository categoryRepository;
	
	@GetMapping("")
	Collection<Category> categories(){
		return categoryRepository.findAll();
	}
	
    @PostMapping("")
    ResponseEntity<Category> createCategory(@RequestBody Category category) throws URISyntaxException {
    	Category result = categoryRepository.save(category);
        return ResponseEntity.created(new URI("/products/group/" + result.getId()))
                .body(result);
    }
    
	@PutMapping("")
    ResponseEntity<Category> updateGroup(@RequestBody Category category) {
		Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }
	
}
