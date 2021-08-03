package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Product;

@Repository
public interface ProductRepository extends JpaRepositoryImplementation<Product, Long> {

}
