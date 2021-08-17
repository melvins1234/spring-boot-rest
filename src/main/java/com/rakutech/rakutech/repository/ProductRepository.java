package com.rakutech.rakutech.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Product;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

}
