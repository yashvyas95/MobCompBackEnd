
package com.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import com.dto.Message;

@RestController
public class WebSocketChatController {
	
		private static final Logger logger = LoggerFactory.getLogger(WebSocketChatController.class);
	
		@Autowired
		SimpMessagingTemplate simpMessagingTemplate;
		
		@MessageMapping("/chat")
		@SendTo("/topic/chat")
		public void brodcastChat (@Payload String message) {
			logger.info("----SENDMESSAGE------"+message);
			this.simpMessagingTemplate.convertAndSend("/topic/chat",message);
		}
		

	}

