package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.rakutech.rakutech.model.ProductCategory;

public interface ProductCategoryRepository extends JpaRepositoryImplementation<ProductCategory, Integer> {

}
