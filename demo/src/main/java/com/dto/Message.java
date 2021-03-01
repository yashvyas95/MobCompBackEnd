package com.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "message")
public class Message {

	@JsonIgnore
	@Id
    @GeneratedValue
    @Column(name = "id")
	private Long id;
	
	@Column(name = "channel")
	private String channel;
	
	/*
	 * FIXME could be improved by mapping the entity itself (User)
	 */
	@Column(name = "sender")
	private String sender;
	
	public Long getReceiver() {
		return receiver;
	}

	public void setReceiver(Long receiver) {
		this.receiver = receiver;
	}

	@Column(name = "content")
	private String content;
	
	@Column(name = "receiver")
	private Long receiver;
	
	
	
	@Column(name = "timestamp")
	private String timestamp;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "read_date")
	private Date readDate;
	
	

	public Message() {
		super();
	}

	public Message(String channel, String sender, String content, String timestamp,Long receiver) {
		super();
		this.channel = channel;
		this.sender = sender;
		this.content = content;
		this.timestamp = timestamp;
		this.receiver = receiver;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public Date getReadDate() {
		return readDate;
	}

	public void setReadDate(Date readDate) {
		this.readDate = readDate;
	}
}