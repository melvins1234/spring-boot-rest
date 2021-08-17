package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	@Query("SELECT c FROM Category c WHERE c.name = ?1")
	Category findByCategoryName(String name);
}
