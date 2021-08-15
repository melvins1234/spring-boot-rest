package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.ProductImages;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImages, Integer> {
	
}
