package com.rakutech.rakutech.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Category;

@Repository
public interface CategoryRepository extends PagingAndSortingRepository<Category, Long> {

}
