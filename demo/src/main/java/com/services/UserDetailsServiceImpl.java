package com.services;

import com.dto.User;
//import com.programming.techie.springredditclone.repository.UserRepository;
import com.repositories.UserRepo;

import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static java.util.Collections.singletonList;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepo userRepo;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) {
        Optional<com.dto.User> userOptional = userRepo.findByUsername(username);
        User user = userOptional
                .orElseThrow(() -> new UsernameNotFoundException("No user " +
                        "Found with username : " + username));

        return new org.springframework.security
                .core.userdetails.User(user.getUsername(), user.getPassword(),
                user.isEnabled(), true, true,
                true, getAuthorities("USER"));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        return singletonList(new SimpleGrantedAuthority(role));
    }
    
    @Transactional(readOnly = true)
    public User loadUserByEmail(String email) {
    	var user =  userRepo.findByUsername(email).orElse(null);
    	if(user==null) {
    		user = userRepo.findByEmail(email).orElse(null);
    	}
    	return user;
    }
    
    
    @Transactional(readOnly=true)
    public List<User> loadAll(){
    	return userRepo.findAll();
    }
}
