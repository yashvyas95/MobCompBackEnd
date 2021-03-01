package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dto.RegisterRescueTeam;
import com.dto.ReqisterRequestVictim;
import com.dto.Request;
import com.dto.RescueTeam;
import com.repositories.RequestRepo;
import com.repositories.RescueTeamRepo;
import com.services.AuthService;
import com.services.RequestVictimService;
import com.services.RescueTeamService;

import static org.springframework.http.HttpStatus.OK;

import java.util.List;

@RestController
@RequestMapping("/api/rescueTeam")
@CrossOrigin(origins="http://localhost:4200/")
public class RescueTeamController {
	@Autowired
	private RescueTeamService resTeamService;
	
	
	@PostMapping("/addRescueTeam")
	public ResponseEntity<String> addRescueTeam(@RequestBody RegisterRescueTeam resTeam){
		resTeamService.add(resTeam);
		return new ResponseEntity<>("RescueTeam Saved",OK);
			 
	}
	
	@GetMapping("/getById/")
	public ResponseEntity<RescueTeam> getRescueTeam(@RequestParam Long id){
		return ResponseEntity.status(OK).body(resTeamService.get(id));
			 
	}
	
	@GetMapping("/getRequestByRescueTeamId/")
	public ResponseEntity<List<Request>> getRequestAssigned(@RequestParam Long id){
		return ResponseEntity.status(OK).body(resTeamService.getRequestAssigned(id));
	}	
	
	@GetMapping("/getAll/")
	public ResponseEntity<List<RescueTeam>> getAll(){
		return ResponseEntity.status(OK).body(resTeamService.getAll());
	}	
	
}
