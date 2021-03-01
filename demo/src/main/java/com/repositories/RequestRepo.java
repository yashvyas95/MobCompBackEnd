package com.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Request;

@Repository
public interface RequestRepo extends JpaRepository<Request, Long>{
		
	//List<Request> findByStatus(String status);
	
//	List<Request> findByLocation(String location);
	
	//List<Request> findByAssignedToTeamId(Integer teamId);
	
//	Optional<Request> findById(int id);
	
	//List<Request> findBynatureOfAssistance(String nature);
	
	List<Request> findByResTeamObj(Long id);
	
	Optional<Request> findByRequestId(Long id);
	
	Optional<Request> findByName(String name);
	
	Optional<Request> findByLocation(String location);
	
	
}