package com.controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import com.repositories.MessageRepo;

import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.dto.Greeting;
import com.dto.*;

import static java.lang.String.format;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

  private static final Logger logger = LoggerFactory.getLogger(ChatController.class);

  @Autowired
  private SimpMessageSendingOperations messagingTemplate;
  @Autowired
  private MessageRepo messageRepo;
  
  
  @MessageMapping("/chat/{roomId}/sendMessage")
  public void sendMessageToChatRoom(@DestinationVariable String roomId, @Payload Message chatMessage) {
	 logger.info(roomId+"----SENDMESSAGE------"+chatMessage.toString());
    //messagingTemplate.convertAndSend("/topic/chat", chatMessage);
    //messagingTemplate.convertAndSend(format("/topic/chat/channel/%s", roomId), chatMessage);
  }
  
  @MessageMapping("/chat/{requestId}/sendToVictim")
  @SendTo("/topic/chat")
  public void sendMessageToVictim(@DestinationVariable String requestId, @Payload Message chatMessage) {
	 logger.info("----SENDMESSAGETOVICTIM------"+chatMessage.toString());
	 //logger.info("----SENDMESSAGETOUSER------"+requestId.toString());
	 messagingTemplate.convertAndSend("/topic/chat", chatMessage);
	 messageRepo.save(chatMessage);
	 messagingTemplate.convertAndSend("/topic/chat/{requestId}", chatMessage);
  }
  
  @MessageMapping("/chat/{rescueTeamId}/sendToRescueTeam")
  //@SendTo("/topic/chat")
  public void sendMessageToRescueTeam(@DestinationVariable String rescueTeamId, @Payload Message chatMessage) {
	 logger.info("----SENDMESSAGETORESCUETAM------"+chatMessage);
	 //logger.info("----SENDMESSAGETOUSER------"+requestId.toString());
	 messagingTemplate.convertAndSend("/topic/chat/"+rescueTeamId, chatMessage);
	 messageRepo.save(chatMessage);
  }
  
  @MessageMapping("/chat/{userId}/sendToUser")
  @SendTo("/topic/chat")
  public void sendMessageToUser(@DestinationVariable String userId, @Payload Message chatMessage) {
	 logger.info("----SENDMESSAGETOUSER------"+chatMessage.toString());
	 //logger.info("----SENDMESSAGETOUSER------"+requestId.toString());
	 //messagingTemplate.convertAndSend("/topic/chat", chatMessage);
	// logger.info("----SENDMESSAGETOUSER------"+chatMessage));
	 messageRepo.save(chatMessage);
	 messagingTemplate.convertAndSend("/topic/chat", chatMessage);
  }
  
  
  @MessageMapping("/chat/{roomId}/addUser")
  public void addUser(@DestinationVariable String roomId, @Payload Message chatMessage,
      SimpMessageHeaderAccessor headerAccessor) {
    String currentRoomId = (String) headerAccessor.getSessionAttributes().put("room_id", roomId);
    if (currentRoomId != null) {
      ChatMessage leaveMessage = new ChatMessage();
      leaveMessage.setType(ChatMessage.MessageType.LEAVE);
      leaveMessage.setSender(chatMessage.getSender());
      messagingTemplate.convertAndSend(format("/channel/%s", currentRoomId), leaveMessage);
      logger.info("----ADDUSER------"+leaveMessage.toString());
    }
    if(chatMessage.getSender()==null) {
    	headerAccessor.getSessionAttributes().put("username", "Request");
    }
    else {
    	headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
    }
    
    messagingTemplate.convertAndSend(format("/channel/%s", roomId), chatMessage);
    logger.info("----ADDUSER------"+headerAccessor.toString());
    
  }
}	