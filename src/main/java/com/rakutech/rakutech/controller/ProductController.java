package com.rakutech.rakutech.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.rakutech.rakutech.model.Product;
import com.rakutech.rakutech.services.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping("")
	Collection<Product> products(){
		return productService.productList();
	}
	
	@GetMapping("/{id}")
	ResponseEntity<?> getProduct(@PathVariable Long id){
		Optional<Product> product = productService.getProduct(id);
		return product.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
    @PostMapping("")
    ResponseEntity<Product> createProduct(@RequestBody Product product) throws URISyntaxException {
        Product result = productService.saveProduct(product);
        return ResponseEntity.created(new URI("/products/group/" + result.getId()))
                .body(result);
    }
	
	@PutMapping("")
    ResponseEntity<Product> updateGroup(@RequestBody Product product) {
        Product result = productService.saveProduct(product);
        return ResponseEntity.ok().body(result);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
    	productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}
