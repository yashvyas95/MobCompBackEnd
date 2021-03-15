package com.services;
import com.dto.ReqisterRequestVictim;
import com.dto.Request;
import com.dto.RescueTeam;
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
	final String[] assistanceNature= {"Crime","Fire","Medical","Crime+Fire","Fire+Medical","Crime+Medical","Crime+Fire+Medical"};
	
    @Autowired
	private  RequestRepo requestRepo;
    private  RescueTeamRepo resTeamRepo;
    
    public Request add(ReqisterRequestVictim victim) {
        Request req = new Request();
        req.setName(victim.getName());
        req.setLocation(victim.getLocation());
        req.setNature(victim.getNature());
        logger.info(victim.getNature()+"NATUREEEEEEEEEEEE");
        req.setStatus(true);
        logger.info("REQUESTSERVICE"+req.toString());
        var list = resTeamRepo.findAll().stream().filter(c->c.getStatus()==true).collect(Collectors.toList());
        logger.info("HERE--"+list.toString());
        Request reqObjSaved=null;
        if(list.size()!=0) {
        	for(var r : list) {
        		
        		logger.info(r.getNature()+"RESTEAM NATURE");
        		logger.info(victim.getNature()+"VCTIM NATURE");
        		
        			if(r.getRequestId()==0 && r.getNature().contains(victim.getNature())) {
        			req.setResTeamObj(r.getRescueTeamId());
        			//logger.info("IN REQUEST SERVICE"+r.toString());
        			//logger.info("IN REQUEST SERVICE"+req.toString());
        			reqObjSaved = requestRepo.save(req);
        			r.setRequestId(reqObjSaved.getRequestId());
        			resTeamRepo.save(r);
        			break;
        			}
        		
        	}
        }
        
        else {
        	req.setResTeamObj(0L);
        	reqObjSaved = requestRepo.save(req);
        	
        }
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
    		var resTeamObj =resTeamRepo.findByRescueTeamId(request.getResTeamObj()).orElse(null);
    		var remaining_Request=requestRepo.findAll().stream().filter(c->c.getResTeamObj()==0 && c.isStatus()).collect(Collectors.toList());
    		
    		logger.info("IN REQUEST SERVICE1"+resTeamObj);
    		logger.info("IN REQUEST SERVICE1"+remaining_Request.toString());
    		if(remaining_Request.size()!=0 && resTeamObj!=null) {
    			resTeamObj.setRequestId(remaining_Request.get(0).getRequestId());
    			remaining_Request.get(0).setResTeamObj(resTeamObj.getRescueTeamId());
    			logger.info("IN");
    		}
    		else {
    				if(resTeamObj!=null) {
    				resTeamObj.setRequestId(0L);
    				resTeamRepo.save(resTeamObj);
    				logger.info("SECOND"+resTeamObj);
    				}
    		}
    		
    		request.setStatus(false);
    		requestRepo.save(request);
    		
        	return request;
    	}
    	
    }
    
    public Request forLogin(String fullName,String location) {
    	var reqObj = requestRepo.findByName(fullName).orElse(null);
    	if(reqObj!=null) {
    		logger.info(reqObj.toString());
        	logger.info(reqObj.getLocation());
        	logger.info(location);
        	if(reqObj.getLocation().toString().equals(location.toString())) {
        		return reqObj;
        	}
    	}
    	return null;
    }
    
    
    public List<Request> getAcitveRequestForVictim(Long id){
    	logger.info("IN REQUEST SERVICE"+id);
    	var active_dir = requestRepo.findAll();
    	active_dir=active_dir.stream()
    			.filter(c->(c.isStatus()) )
    			.collect(Collectors.toList());
    	logger.info("IN REQUEST SERVICE"+active_dir.toString());
    	//logger.info("IN REQUEST SERVICE"+list.toString());
    	return active_dir;
    }
    
    public List<Request> getAllAciveRequest(){
    	var active_dir = requestRepo.findAll();
    	active_dir = active_dir.stream().filter(c->c.isStatus()).collect(Collectors.toList());
    	return active_dir;
    }
    
    public Request save(Request resTeam) {
    	return requestRepo.save(resTeam);
    }
}

