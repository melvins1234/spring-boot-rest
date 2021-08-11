package com.rakutech.rakutech.controller;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.config.ImageResourceHttpRequestHandler;
import com.rakutech.rakutech.model.Category;
import com.rakutech.rakutech.repository.CategoryRepository;
import com.rakutech.rakutech.services.CategoryService;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	CategoryService categoryService;
	
	@Resource
    private ImageResourceHttpRequestHandler imageResourceHttpRequestHandler;
	

	@GetMapping("")	
	ResponseEntity<List<Category>> categoriesPagination(
			@RequestParam(defaultValue = "0") Integer page, 
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy) {
	    List<Category> list = categoryService.getCategories(page, pageSize, sortBy);
		 
        return new ResponseEntity<List<Category>>(list, new HttpHeaders(), HttpStatus.OK); 
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
