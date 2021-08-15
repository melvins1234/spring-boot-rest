package com.rakutech.rakutech.controller;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rakutech.rakutech.config.FileUploadUtil;
import com.rakutech.rakutech.model.ProductImages;
import com.rakutech.rakutech.model.Product;
import com.rakutech.rakutech.repository.ProductImageRepository;
import com.rakutech.rakutech.services.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	ProductImageRepository productImageRepository;
	
	List<ProductImages> productImagesList = new ArrayList<>();
	
	@GetMapping("")
	Collection<Product> products(){
		System.out.println(productImagesList);
		return productService.productList();
	}
	
	@GetMapping("/{id}")
	ResponseEntity<?> getProduct(@PathVariable Long id){
		Optional<Product> product = productService.getProduct(id);
		return product.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));	
	}
	
    @PostMapping("")
    ResponseEntity<Product> createProduct(@RequestBody Product product) throws URISyntaxException, IOException {
    	System.out.println("sample" + product.toString());
    	
        Product result = productService.saveProduct(product);
        
        return ResponseEntity.created(new URI("/products/group/" + result.getId()))
                .body(result);
    }
    
    @RequestMapping(value="/upload", method=RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Object> uploadFile(@RequestParam("file") MultipartFile[] multipartFile, 
    		HttpServletRequest request) throws URISyntaxException, IOException {

    	String uploadDir = "images/";
    	
        Arrays.asList(multipartFile).stream().forEach(file -> {
        	if(!file.isEmpty()) {
        		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
                productImagesList.add(new ProductImages(request.getScheme()+ "://" + request.getServerName() + ":" + request.getServerPort() + "/api/images/" + fileName));
                try {
                	FileUploadUtil.saveFile(uploadDir, fileName, file);
	      		} catch (IOException e) {
	      			
	      		} 
        	}
    	  
        });
        
//        return new ResponseEntity<>("File is Uploaded successfully", HttpStatus.OK);
        return ResponseEntity.ok().body(productImagesList);
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
