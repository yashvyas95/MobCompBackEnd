package com.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Department;
import com.dto.RescueTeam;


@Repository
public interface DepartmentRepo extends JpaRepository<Department, Long>{
		
	
	List<Department> findOneByStatus(boolean status);
	
//	List<RescueTeam> findBylocation(String location);
	
	//RescueTeam findByTypeOfTeam(String type);
	
	Optional<Department> findBydepartmentId(Long id);
	
//	Optional<RescueTeam> findByrequestId(Integer id);
	
	//Optional<RescueTeam> findByRescueTeamId(Long id);
	
	Optional<Department> findByEmployees(Long id);
	
	List<Long> findMembersByName(String name);
	
	Optional<Department> findByName(String name);
	
}