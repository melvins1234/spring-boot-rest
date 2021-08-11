package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Category;

@Repository
public interface CategoryRepository extends JpaRepositoryImplementation<Category, Long> {

}
