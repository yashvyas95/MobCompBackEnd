package com.controller;

import com.dto.RegisterRequestUser;
import com.dto.User;
import com.dto.AuthenticationResponse;
import com.dto.LoginRequest;
import com.services.AuthService;
import com.services.UserDetailsServiceImpl;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import static org.springframework.http.HttpStatus.OK;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="http://localhost:4200")
public class AuthController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@Autowired
    private AuthService authService;
	@Autowired
	private UserDetailsServiceImpl userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody RegisterRequestUser registerRequest) {
        authService.signup(registerRequest);
        return new ResponseEntity<>("User Registration Successful",OK);
    }
    
    @CrossOrigin(origins="http://localhost:4200")
    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest loginRequest) {
        var a = authService.login(loginRequest);
        var b = authService.getCurrentUser();
        a.setDepartment(b.getDepartment());
        a.setRole(b.getRole());
        return a;
    }
    
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@Valid @RequestBody String refreshTokenRequest) {
       // refreshTokenService.deleteRefreshToken(refreshTokenRequest.getRefreshToken());
        return ResponseEntity.status(OK).body("Refresh Token Deleted Successfully!!");
    }
    
    @GetMapping("/userByUsername")
    public ResponseEntity<User> getUser(@RequestParam String username){
    		return ResponseEntity.status(OK).body(userService.loadUserByEmail(username));
    }
    
    @GetMapping("/getAllEmp")
    public ResponseEntity<List<User>> getAllEmp(){
    		return ResponseEntity.status(OK).body(userService.loadAll());
    }
    
    
}