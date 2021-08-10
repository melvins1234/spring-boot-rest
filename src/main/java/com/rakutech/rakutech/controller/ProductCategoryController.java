package com.rakutech.rakutech.controller;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.model.ProductCategory;
import com.rakutech.rakutech.repository.ProductCategoryRepository;

@RestController
@RequestMapping("/api/product-categories")
public class ProductCategoryController {

	@Autowired
	ProductCategoryRepository productCategoryRepository;
	
    @PostMapping("")
    ResponseEntity<ProductCategory> createCategory(@RequestBody ProductCategory productCategory) throws URISyntaxException {
    	ProductCategory result = productCategoryRepository.save(productCategory);
        return ResponseEntity.created(new URI("/api/product-categories/group/" + result.getId()))
                .body(result);
    }
}
