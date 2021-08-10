package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.rakutech.rakutech.model.Category;

public interface CategoryRepository extends JpaRepositoryImplementation<Category, Long> {

}
