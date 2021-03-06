package com.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dto.Department;
import com.dto.RegisterDepartment;
import com.dto.RegisterRescueTeam;
import com.dto.ReqisterRequestVictim;
import com.dto.Request;
import com.dto.RescueTeam;
import com.repositories.DepartmentRepo;
import com.repositories.RequestRepo;
import com.repositories.RescueTeamRepo;
import com.services.AuthService;
import com.services.RequestVictimService;
import com.services.RescueTeamService;

import static org.springframework.http.HttpStatus.OK;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/department")
@CrossOrigin(origins="http://localhost:4200/")
public class DepartmentController {
	@Autowired
	private DepartmentRepo depRepo;
	
	 private static final Logger logger = LoggerFactory.getLogger(DepartmentController.class);
	
	@PostMapping("/addDepartment/")
	public ResponseEntity<String> addDepartment(@RequestBody RegisterDepartment dep){
		logger.info("ADD Department");
		logger.info(dep.toString());
		Department obj = new Department();
		obj.SetEmployees(dep.getEmployees());
		obj.setLocation(dep.getLocation());
		obj.setName(dep.getName());
		obj.setStatus(true);
		depRepo.save(obj);
		return new ResponseEntity<>("Department Saved",OK);
			 
	}
	
	@GetMapping("/getAll/")
	public ResponseEntity<List<Department>> getAlldepartment(){
		return ResponseEntity.status(OK).body(depRepo.findAll());
			 
	}
	/*
	@GetMapping("/getRequestByRescueTeamId/")
	public ResponseEntity<List<Request>> getRequestAssigned(@RequestParam Long id){
		return ResponseEntity.status(OK).body(resTeamService.getRequestAssigned(id));
	}	
	
	@GetMapping("/getAll/")
	public ResponseEntity<List<RescueTeam>> getAll(){
		return ResponseEntity.status(OK).body(resTeamService.getAll());
	}	
	
	@GetMapping("/assignRequestToResTeam/")
	public ResponseEntity<HashMap<Object, Object>> assignRequestToRescueTeam(@RequestParam String requestId,@RequestParam String rescueTeamId){
		var resTeam = resTeamService.getByRescueTeamId(Long.parseLong(rescueTeamId));
		var reqObj = requestService.get(Long.parseLong(requestId));
		logger.info("ASSIGN REQUEST TO RESCUE TEAM"+resTeam);
		logger.info("ASSIGN REQUEST TO RESCUE TEAM"+reqObj);
		var map = new HashMap<Object,Object>();
		if(resTeam !=null && reqObj!=null) {
			resTeam.setRequestId(reqObj.getRequestId());
			reqObj.setResTeamObj(resTeam.getRescueTeamId());
			resTeamService.save(resTeam);
			requestService.save(reqObj);
			map.put(resTeam,reqObj);
			logger.info("ASSIGN REQUEST TO RESCUE TEAM"+map.toString());
		}
		
		
		return ResponseEntity.status(OK).body(map);
	}
	*/	
}
