package com.services;
import com.dto.RegisterRequestUser;
import com.dto.User;
import com.dto.VerificationToken;
import com.exceptions.SpringRedditException;
import com.repositories.UserRepo;
import com.controller.RequestController;
import com.dto.AuthenticationResponse;
import com.dto.LoginRequest;
import com.repositories.DepartmentRepo;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;

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
public class AuthService {
    @Autowired
	private  UserRepo userRepository;
    private DepartmentRepo depRepo;
    @Autowired
    private  AuthenticationManager authenticationManager;
    private  VerificationTokenRepository verificationtokenrepository;
    private  PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    public void signup(RegisterRequestUser registerRequest) {
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setDepartment(registerRequest.getDepartment());
        user.setRole("USER");
        user.setEnabled(true);
        user.setrescueTeamId(0L);
        var userObj = userRepository.save(user);
        logger.info(userObj.toString());
        
        var DepObj = depRepo.findByName(registerRequest.getDepartment()).orElse(null);
        var members = DepObj.getEmployees();
        members.add(userObj.getUserId());
        depRepo.save(DepObj);
        logger.info(DepObj.toString());
        String token = "token";
        
    }

    @Transactional(readOnly = true)
    public User getCurrentUser() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder.
                getContext().getAuthentication().getPrincipal();
        return userRepository.findByUsername(principal.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User name not found - " + principal.getUsername()));
    }


    public AuthenticationResponse login(LoginRequest loginRequest) {
    	Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        return AuthenticationResponse.builder(loginRequest.getUsername());
    }

   
    public boolean isLoggedIn() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return !(authentication instanceof AnonymousAuthenticationToken) && authentication.isAuthenticated();
    }
}

