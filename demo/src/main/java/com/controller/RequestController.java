package com.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dto.ReqisterRequestVictim;
import com.dto.Request;
import com.dto.RequestResponse;
import com.repositories.RequestRepo;
import com.services.AuthService;
import com.services.RequestVictimService;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.ResponseEntity.status;

import java.util.List;

@RestController
@RequestMapping("/api/request")
@CrossOrigin(origins="http://localhost:4200/")
public class RequestController {
	@Autowired
	private RequestVictimService reqVicService;
	 private static final Logger logger = LoggerFactory.getLogger(RequestController.class);

	@PostMapping("/addRequest")
	public ResponseEntity<Request> addRequest(@RequestBody ReqisterRequestVictim request){
		logger.info("REQUEST CONTROLLER"+request);
		var reqBody = reqVicService.add(request);
		return status(HttpStatus.OK).body(reqBody);
			 
	}
	
	@GetMapping("/getById/")
	public ResponseEntity<Request> getRequest(@RequestParam Long id) {
		return status(HttpStatus.OK).body(reqVicService.get(id));
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Request>> getAllRequest() {
		return status(HttpStatus.OK).body(reqVicService.getAll());
	}
	
	@GetMapping("/Completerequest/")
	public ResponseEntity<Request> completeRequest(@RequestParam Long id) {
		return status(HttpStatus.OK).body(reqVicService.completeRequest(id));
	}
	
	@GetMapping("/victimLogin/")
	public ResponseEntity<Request> completeRequest(@RequestParam String fullName,@RequestParam String location) {
		var returnRequest = reqVicService.forLogin(fullName, location);
		return status(HttpStatus.OK).body(returnRequest);
	}
	
	@GetMapping("/getUserActiveRequest/")
	public ResponseEntity<List<Request>> getUserActiveRequest(@RequestParam String id) {
		List<Request> returnRequest = reqVicService.getAcitveRequestForVictim(Long.parseLong(id));
		logger.info("REQUEST_CONTROLLER"+returnRequest.toString());
		return status(HttpStatus.OK).body(returnRequest);
	}
	
	@GetMapping("/getAllActiveRequest/")
	public ResponseEntity<Object> getAllActiveRequest() {
		List<Request> returnRequest = reqVicService.getAllAciveRequest();
		logger.info("REQUEST_CONTROLLER"+returnRequest.toString());
		return status(HttpStatus.OK).body(returnRequest);
	}
	
}
