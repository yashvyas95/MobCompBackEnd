package com.controller;

import static org.springframework.http.ResponseEntity.status;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.MessageRepo;
import com.dto.Message;
import com.dto.Request;

@RestController
public class MessageController {
	
	@Autowired 	
	private MessageRepo messageRepo;
	
	
	@GetMapping("/api/request/getmessages")
	public ResponseEntity<List<Message>> getRequestMessage(@RequestParam String requestId) {
		return status(HttpStatus.OK).body(messageRepo.findByReceiver(Long.parseLong(requestId)));
	}
}
