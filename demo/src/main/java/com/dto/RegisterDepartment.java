package com.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class RegisterDepartment {
	
	private ArrayList<Long> employees;
    private String location;
    private String nature;
    private String name;
    
    
    
}
