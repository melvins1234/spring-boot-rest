package com.rakutech.rakutech.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.model.Category;
import com.rakutech.rakutech.services.CategoryService;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@GetMapping("")	
	ResponseEntity<List<Category>> categoriesPagination() {
	    List<Category> list = categoryService.categoryList();
        return new ResponseEntity<List<Category>>(list, new HttpHeaders(), HttpStatus.OK); 
	}
	
    @PostMapping("")
    ResponseEntity<Category> createCategory(@RequestBody Category category) throws URISyntaxException {
    	
//    	if(categoryService.categoryByCategoryName(category.getName()) != null) {
//    		return ResponseEntity.status(HttpStatus.FORBIDDEN).build(); 
//    		
//    	}
    	
    	Category result = categoryService.save(category);
        return ResponseEntity.created(new URI("/products/group/" + result.getId()))
                .body(result);
    }
    
	@PutMapping("")
    ResponseEntity<Category> updateGroup(@RequestBody Category category) {
		Category result = categoryService.save(category);
        return ResponseEntity.ok().body(result);
    }
	
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
    	categoryService.deleteCategory(id);
        return ResponseEntity.ok().build();
    }

}
