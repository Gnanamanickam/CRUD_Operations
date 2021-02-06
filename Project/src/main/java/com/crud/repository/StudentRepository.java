package com.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.entity.StudentEntity;

public interface StudentRepository extends JpaRepository<StudentEntity, Integer> {
	
	

}