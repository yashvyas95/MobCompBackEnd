package com.services;
import com.dto.ReqisterRequestVictim;
import com.dto.Request;
import com.dto.User;
import com.dto.VerificationToken;
import com.exceptions.SpringRedditException;
import com.repositories.RequestRepo;
import com.repositories.RescueTeamRepo;
import com.repositories.UserRepo;
import com.controller.AuthController;
import com.dto.AuthenticationResponse;
import com.dto.LoginRequest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.repositories.VerificationTokenRepository;
//import static java.time.Instant.now;

//import java.time.Instant;
//import java.util.Optional;
//import java.util.UUID;

@Service
@AllArgsConstructor
@Slf4j
public class RequestVictimService {
	
	private static final Logger logger = LoggerFactory.getLogger(RequestVictimService.class);
	
    @Autowired
	private  RequestRepo requestRepo;
    private  RescueTeamRepo resTeamRepo;
    
    public Request add(ReqisterRequestVictim victim) {
        Request req = new Request();
        req.setName(victim.getName());
        req.setLocation(victim.getLocation());
        req.setNature(victim.getNature());
        req.setStatus(true);
        var list = resTeamRepo.findAll().stream().filter(c->c.getStatus()==false).collect(Collectors.toList());
        if(list.size()!=0) {
        	logger.info(list.toString());
        	logger.info(list.get(0).toString());
        	req.setResTeamObj(list.get(0).getRescueTeamId());
        	
        	var reqObjSaved = requestRepo.save(req);
        	list.get(0).setRequestId(reqObjSaved.getRequestId());
        	list.get(0).setStatus(true);
        	
        	}
        else {req.setResTeamObj(13L);}
        var reqObjSaved = requestRepo.save(req);
        return reqObjSaved;
    }
    
    public Request get(Long id) {
    	return requestRepo.findById(id).orElse(null);
    }
    
    public List<Request> getAll() {
    	return requestRepo.findAll();
    }
    
    public Request completeRequest(Long id) {
    	logger.info(id.toString());
    	Request request = requestRepo.findByRequestId(id).orElse(null);
    	logger.info(request.toString());
    	if(request==null) {return null;}
    	else {
    		
    		request.setStatus(false);
    		requestRepo.save(request);
        	return request;
    	}
    	
    }
    
    public Request forLogin(String fullName,String location) {
    	var reqObj = requestRepo.findByName(fullName).orElse(null);
    	logger.info(reqObj.toString());
    	logger.info(reqObj.getLocation());
    	logger.info(location);
    	if(reqObj.getLocation().toString().equals(location.toString())) {
    		return reqObj;
    	}
    	return null;
    }
    
    
    public List<Request> getAcitveRequestForVictim(Long id){
    	var active_dir = requestRepo.findByResTeamObj(id);
    	var list = active_dir.stream().filter(c->c.isStatus()).collect(Collectors.toList());
    	logger.info(active_dir.toString());
    	return list;
    }	
}

