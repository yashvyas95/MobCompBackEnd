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

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/rescueTeam")
@CrossOrigin(origins="http://localhost:4200/")
public class RescueTeamController {
	@Autowired
	private RescueTeamService resTeamService;
	@Autowired
	private RequestVictimService requestService;
	
	 private static final Logger logger = LoggerFactory.getLogger(RescueTeamController.class);
	
	@PostMapping("/addRescueTeam/")
	public ResponseEntity<String> addRescueTeam(@RequestBody RegisterRescueTeam resTeam){
		logger.info("ADD RESCUE TEAM");
		logger.info(resTeam.toString());
		resTeamService.add(resTeam);
		return new ResponseEntity<>("RescueTeam Saved",OK);
			 
	}
	
	@GetMapping("/getById/")
	public ResponseEntity<RescueTeam> getRescueTeamById(@RequestParam String id){
		return ResponseEntity.status(OK).body(resTeamService.getByRescueTeamId(Long.parseLong(id)));
			 
	}
	
	@GetMapping("/getRequestByRescueTeamId/")
	public ResponseEntity<List<Request>> getRequestAssigned(@RequestParam String id){
		return ResponseEntity.status(OK).body(resTeamService.getRequestAssigned(Long.parseLong(id)));
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
}
