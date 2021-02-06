package com.crud.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.crud.entity.PublicationEntity;
import com.crud.entity.StudentEntity;
import com.crud.repository.PublicationRepository;
import com.crud.repository.StudentRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

	@Autowired
	PublicationRepository publicationRepository;

	@Autowired	
	StudentRepository studentRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getHomePage() {
		return "index";
	}

		@GetMapping("/getPublications")
		public ResponseEntity<List<PublicationEntity>> getAllPublicationDetails() {
			try {
				List<PublicationEntity> result = publicationRepository.findAll();
				if (result.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(result, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/getStudentDetails")
		public ResponseEntity<List<StudentEntity>> getAllStudentDetails() {
			try {
				List<StudentEntity> result = studentRepository.findAll();
				if (result.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(result, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}


		@PostMapping("/createPublication")
		public ResponseEntity createPublication(@RequestBody List<PublicationEntity> publications) {
			try {
				for(int i=0; i < publications.size(); i++) {
					PublicationEntity publicationEntity = new PublicationEntity();
					publicationEntity.setId(publications.get(i).getId());
					Optional<StudentEntity> result = studentRepository.findById(publications.get(i).getId());
					if ( !result.isPresent()) {
						StudentEntity se = new StudentEntity();
						se.setId(publications.get(i).getId());
						studentRepository.save(se);
					}
					publicationEntity.setStudent_id(publications.get(i).getStudent_id());
					publicationEntity.setTitle(publications.get(i).getTitle());
					publicationEntity.setYear(publications.get(i).getYear());
				publicationRepository.save(publicationEntity);
				}
				return new ResponseEntity<>(HttpStatus.CREATED);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@PostMapping("/createPublic")
		public ResponseEntity createPublic(@RequestBody PublicationEntity publications) {
			try {
				publicationRepository.save(publications);
				return new ResponseEntity<>(HttpStatus.CREATED);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		@PostMapping("/UpdatePublication")
		public ResponseEntity<String> UpdatePublication(@RequestBody PublicationEntity publications) {
			try {
				publicationRepository.save(publications);
				
				return new ResponseEntity<>("Successfully Created", HttpStatus.CREATED);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		@DeleteMapping("/publication/{id}")
		public ResponseEntity<HttpStatus> deletePublication(@PathVariable("id") int id) {
			try {
				publicationRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		@DeleteMapping("/deletePublications")
		public ResponseEntity<HttpStatus> deletePublications() {
			try {
				publicationRepository.deleteAll();
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}

		}


	}

