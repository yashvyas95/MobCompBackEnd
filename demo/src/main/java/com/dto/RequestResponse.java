package com.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
public class RequestResponse {
	
    private Request request;
    public RequestResponse(Request req) {this.request=req;}
}
