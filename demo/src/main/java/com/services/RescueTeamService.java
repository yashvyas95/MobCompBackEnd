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
import com.dto.AuthenticationResponse;
import com.dto.LoginRequest;
import com.dto.RegisterRescueTeam;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

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
public class RescueTeamService {
	
	private static final Logger logger = LoggerFactory.getLogger(RescueTeamService.class);
	
    @Autowired
   private  RequestRepo requestRepo;
    private  RescueTeamRepo resTeamRepo;
    
    public void add(RegisterRescueTeam resTeam) {
        String token = "token";
        RescueTeam resTeamObj = new RescueTeam();
		resTeamObj.setEmpId(resTeam.getEmpId());
		resTeamObj.setEmp2Id(resTeam.getEmp2Id());
		resTeamObj.setEmp3Id(resTeam.getEmp3Id());
		resTeamObj.setLocation(resTeam.getLocation());
		resTeamObj.setStatus(false);
		resTeamObj.setRequestId(0L);
        resTeamRepo.save(resTeamObj);
    }
    
    public RescueTeam get(Long number) {
    	//logger.info("HERE+++++++++++++++++++++",resTeamRepo.findByRequestId(number).orElse(null));
    	return resTeamRepo.findById(number).orElse(null);	
    	
    }
    
    public List<Request> getRequestAssigned(Long number){
    	return requestRepo.findByResTeamObj(number);
    }
    
    public List<RescueTeam> getAll(){
    	return resTeamRepo.findAll();
    }
    
}

