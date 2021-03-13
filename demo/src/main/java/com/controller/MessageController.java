package com.controller;

import static org.springframework.http.ResponseEntity.status;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.MessageRepo;
import com.dto.Message;
import com.dto.Request;

@RestController
@RequestMapping("/api/message")
@CrossOrigin
public class MessageController {
	
	@Autowired 	
	private MessageRepo messageRepo;
	
	
	@GetMapping("/getmessages/")
	public ResponseEntity<List<Message>> getRequestMessage(@RequestParam String requestId) {
		return status(HttpStatus.OK).body(messageRepo.findByReceiver(Long.parseLong(requestId)));
	}
	
	@GetMapping("/getmessagesByUserId/")
	public ResponseEntity<List<Message>> getUserMessage(@RequestParam String userId) {
		return status(HttpStatus.OK).body(messageRepo.findByReceiver(Long.parseLong(userId)));
	}
	
}
