package com.rakutech.rakutech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rakutech.rakutech.model.Product;
import com.rakutech.rakutech.repository.ProductRepository;

@Service
@Transactional
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public List<Product> productList(){
		return productRepository.findAll();
	}
	
	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Optional<Product> getProduct(long id) {
		return productRepository.findById(id);
	}
	
	public void deleteProduct(long id) {
		productRepository.deleteById(id);
	}
	
}
