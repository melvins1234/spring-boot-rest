package com.rakutech.rakutech.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rakutech.rakutech.model.Product;
import com.rakutech.rakutech.repository.ProductRepository;

@Service
@Transactional
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public List<Product> productList(Integer pageNo, Integer pageSize, String sortBy){
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		 
        Page<Product> pagedResult = productRepository.findAll(paging);
         
        if(pagedResult.hasContent()) return pagedResult.getContent();
        else return new ArrayList<Product>(); 
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
