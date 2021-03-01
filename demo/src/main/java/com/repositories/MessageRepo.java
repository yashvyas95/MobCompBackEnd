package com.repositories;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.dto.Message;

@Repository
public interface MessageRepo extends JpaRepository<Message, Long>{
	
//	Optional<Message> findById(String location);
	
//	List<Message> findBySenderId(Integer senderID);
	
//	List<Message> findByRecipientId(Integer RecipientId);
	
//	List<Message> findBySenderName(String name);
	
//	List<Message> findBystatus(String nature);
	
	
	
	Page<Message> findAllByChannel(String channel, org.springframework.data.domain.Pageable pageable);
	
	@Modifying
	@Query(value = "update message set readDate = now() "
			+ " where channel = ?1 and sender = ?2 and readDate is null", nativeQuery = true)
	void sendReadReceipt(String channel, String username);
	
	List<Message> findByReceiver(Long id);
	
	List<Message> findBySender(Long id);
	
	List<Message> findByChannel(String channel);
	
}