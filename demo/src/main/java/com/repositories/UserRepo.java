package com.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{
		
	//List<User> findById(String status);
	
	Optional<User> findByUserId(Long id);
	
	Optional<User> findByUsername(String username);
	
	Optional<User> findByEmail(String email);
	
	User findOneByUserId(Long id);
	
	Optional<User> findByPassword(String password);
	
	//List<User> findByRole(String role);
}