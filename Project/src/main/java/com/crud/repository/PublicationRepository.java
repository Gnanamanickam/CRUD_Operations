package com.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.entity.PublicationEntity;


public interface PublicationRepository extends JpaRepository<PublicationEntity, Integer> {
	
	

}
