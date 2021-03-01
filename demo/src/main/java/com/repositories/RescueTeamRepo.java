package com.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.dto.RescueTeam;


@Repository
public interface RescueTeamRepo extends JpaRepository<RescueTeam, Long>{
		
	
	List<RescueTeam> findOneByStatus(boolean status);
	
//	List<RescueTeam> findBylocation(String location);
	
	//RescueTeam findByTypeOfTeam(String type);
	
	Optional<RescueTeam> findByRequestId(Long id);
	
//	Optional<RescueTeam> findByrequestId(Integer id);
	
	Optional<RescueTeam> findByRescueTeamId(Long id);
	
	Optional<String> findByEmpId(String id);
	Optional<String> findByEmp2Id(String id);
	Optional<String> findByEmp3Id(String id);
	
	
}