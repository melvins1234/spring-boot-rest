package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
