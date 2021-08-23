package com.rakutech.rakutech.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rakutech.rakutech.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
//	@Query("SELECT p from Product p WHERE u.email = :email")
	@Query("select p from Product p "
			+ "inner join p.categories c "
			+ "where c.name = :name")
	Optional<List<Product>> findByCategory(@Param("name") String name);

}
