package com.rakutech.rakutech.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.data.repository.query.Param;

import com.rakutech.rakutech.model.Admin;

public interface AdminRepository extends JpaRepositoryImplementation<Admin, Integer> {
    @Query("SELECT a FROM Admin a WHERE a.email = :email")
    public Admin getAdminByEmail(@Param("email") String email);
}
